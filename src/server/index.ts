import { config, container, emmitter, logger, router } from '@sidekick-coder/zenith-kit/server'
import { definePlugin } from '@sidekick-coder/zenith-kit/shared'
import path from 'node:path'
import WebhookSenderManager from './services/WebhookSenderManager.ts'

async function routes() {
    await router.addFileBaseRoutes(path.resolve(import.meta.dirname, 'api'), {
        prefix: '/api/webhook',
        identifier: 'webhook',
    })
}

export default definePlugin(async () => {
    emmitter.on('router:registered', routes)

    const manager = WebhookSenderManager
        .create()
        .setLogger(logger.child({ label: 'webhook' }))
        .setDebug(config.getOne(['webhook.debug', 'app.debug', 'debug'], false))

    container.set(WebhookSenderManager, manager)

    await emmitter.emitAndWait('webhook:ready', { manager})

    await manager.load()
})

