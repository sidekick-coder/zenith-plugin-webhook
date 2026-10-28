import { authGuard, router, lifecycle, menu } from '@sidekick-coder/zenith-kit/client'
import type { DefineComponent } from 'vue'
import { definePlugin } from '@sidekick-coder/zenith-kit/shared'

export default definePlugin(async () => {
    const id = 'webhook'

    lifecycle.on('load', async () => {
        router.auto(import.meta.glob<DefineComponent>('./pages/**/*.vue'), {
            strip: ['pages'],
            prefix: `/admin/${id}`,
            guards: [authGuard],
            refine: (records) => records.map(record => {
                record.meta = {
                    layout: 'admin',
                }

                return record
            })

        })

        menu.add({
            label: $t('Senders'),
            icon: 'lucide:send',
            group: $t('Webhook'),
            layout: 'admin',
            to: `/admin/${id}/senders`,
        })
    })
})

