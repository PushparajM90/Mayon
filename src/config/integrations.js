export const integrationConfig = {
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  },
  whatsapp: {
    adminNumber: import.meta.env.VITE_WHATSAPP_ADMIN_NUMBER,
  },
  googleSheets: {
    endpoint: import.meta.env.VITE_GOOGLE_SHEETS_ENDPOINT,
  },
}
