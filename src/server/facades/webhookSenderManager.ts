import { container } from '@sidekick-coder/zenith-kit/server'
import WebhookSenderManager from '#server/services/WebhookSenderManager.ts'

const webhookSenderManager = container.proxy<WebhookSenderManager>(WebhookSenderManager)

export default webhookSenderManager
