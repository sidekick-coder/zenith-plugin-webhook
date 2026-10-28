import { execFile as execFileCallback } from 'node:child_process'
import { cp, mkdtemp, rm, stat } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { basename, dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'

const execFile = promisify(execFileCallback)
const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const releaseFiles = ['package.json', 'README.md', 'zenith.config.yml'] as const

async function run(command: string, args: string[], cwd: string) {
    try {
        return await execFile(command, args, { cwd })
    } catch (error) {
        const details = error instanceof Error ? error.message : String(error)
        throw new Error(`Command failed: ${command} ${args.join(' ')}\n${details}`)
    }
}

async function exists(path: string) {
    try {
        await stat(path)
        return true
    } catch (error) {
        if (typeof error === 'object' && error !== null && 'code' in error && error.code === 'ENOENT') {
            return false
        }

        throw error
    }
}

async function main() {
    const temporaryDirectory = await mkdtemp(join(tmpdir(), `${basename(repositoryRoot)}-release-`))
    const workingDirectory = join(temporaryDirectory, 'repository')
    const artifactsDirectory = join(temporaryDirectory, 'artifacts')
    const releaseWorktree = join(temporaryDirectory, 'release')
    let releaseWorktreeCreated = false

    try {
        await cp(repositoryRoot, workingDirectory, {
            recursive: true,
            filter: (source) => !['.git', 'node_modules', 'dist'].includes(basename(source)),
        })
        await run('npm', ['ci'], workingDirectory)
        await run('npm', ['run', 'build'], workingDirectory)

        if (!await exists(join(workingDirectory, 'dist'))) {
            throw new Error('Build completed without creating dist.')
        }

        for (const file of releaseFiles) {
            if (!await exists(join(workingDirectory, file))) {
                throw new Error(`Release input is missing after build: ${file}`)
            }
        }

        await cp(join(workingDirectory, 'dist'), join(artifactsDirectory, 'dist'), { recursive: true })
        for (const file of releaseFiles) {
            await cp(join(workingDirectory, file), join(artifactsDirectory, file))
        }

        await run('git', ['worktree', 'add', '--detach', releaseWorktree], repositoryRoot)
        releaseWorktreeCreated = true

        const releaseExists = Boolean(
            (await run('git', ['branch', '--list', 'release'], repositoryRoot)).stdout.trim(),
        )

        if (releaseExists) {
            await run('git', ['switch', 'release'], releaseWorktree)
        } else {
            await run('git', ['switch', '--orphan', 'release'], releaseWorktree)
        }

        if ((await run('git', ['ls-files'], releaseWorktree)).stdout.trim()) {
            await run('git', ['rm', '-rf', '.'], releaseWorktree)
        }

        await cp(join(artifactsDirectory, 'dist'), join(releaseWorktree, 'dist'), { recursive: true })
        for (const file of releaseFiles) {
            await cp(join(artifactsDirectory, file), join(releaseWorktree, file))
        }

        const message = (await run('git', ['rev-parse', '--abbrev-ref', 'HEAD'], repositoryRoot)).stdout.trim()

        await run('git', ['add', '-f', 'dist', ...releaseFiles], releaseWorktree)
        await run('git', ['commit', '--allow-empty', '-m', message], releaseWorktree)
    } finally {
        if (releaseWorktreeCreated) {
            await run('git', ['worktree', 'remove', '--force', releaseWorktree], repositoryRoot)
        }

        await rm(temporaryDirectory, { recursive: true, force: true })
    }
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})