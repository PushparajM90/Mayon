# Mayon

Modern food ordering static website built with React and Vite.

## Features

- Premium responsive UI for mobile, tablet, and desktop
- Dark and light theme support with persisted preference
- First-visit mobile number registration with local returning-user recognition
- Modular food menu cards with dish IDs, pricing, hover states, and order selection
- Customer feedback form prepared for EmailJS
- Order flow prepared for WhatsApp admin delivery
- Google Sheets tracking service stub for ordered food, delivered food, customers, and timestamps
- Clean component, data, hook, config, and service folders

## Project Structure

```text
src/
  components/       Reusable page sections and UI controls
  config/           Future integration environment mapping
  data/             Company and menu data
  hooks/            Theme and reusable React logic
  services/         User, feedback, WhatsApp, order, and Sheets adapters
```

## Getting Started

```bash
npm install
npm run dev
```

## Production Checks

```bash
npm run lint
npm run build
```

## Future Credentials

Copy `.env.example` to `.env.local` and fill these when the integrations are ready:

```text
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
VITE_WHATSAPP_ADMIN_NUMBER=
VITE_GOOGLE_SHEETS_ENDPOINT=
```

The current service files log integration-ready payloads so real providers can be wired in without changing the page components.
