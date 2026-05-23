import { trackOrder } from './googleSheetsService'
import { sendOrderToWhatsApp } from './whatsappService'

export async function createOrder(orderInput) {
  const order = {
    ...orderInput,
    createdAt: new Date().toISOString(),
    status: 'ordered',
  }

  await sendOrderToWhatsApp(order)
  await trackOrder(order)

  return order
}
