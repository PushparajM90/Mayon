import { integrationConfig } from '../config/integrations'

export async function sendOrderToWhatsApp(order) {
  const message = [
    'New Mayon order',
    `Mobile: ${order.customerMobileNumber}`,
    `Dish IDs: ${order.dishIds.join(', ')}`,
    `Total: ₹${order.total}`,
  ].join('\n')

  console.info('WhatsApp order message ready:', {
    adminNumber: integrationConfig.whatsapp.adminNumber,
    message,
  })
  return message
}
