import { integrationConfig } from '../config/integrations'

export async function submitFeedback(feedback) {
  const payload = {
    ...feedback,
    submittedAt: new Date().toISOString(),
  }

  console.info('EmailJS feedback payload ready:', {
    config: integrationConfig.emailjs,
    payload,
  })
  return payload
}
