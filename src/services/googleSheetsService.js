import { integrationConfig } from '../config/integrations'

export async function trackOrder(order) {
  const trackingPayload = {
    orderedFoodData: order.dishIds,
    deliveredFoodData: [],
    customerDetails: {
      mobileNumber: order.customerMobileNumber,
    },
    orderTimestamp: order.createdAt,
    status: 'ordered',
  }

  console.info('Google Sheets tracking payload ready:', {
    endpoint: integrationConfig.googleSheets.endpoint,
    trackingPayload,
  })
  return trackingPayload
}
