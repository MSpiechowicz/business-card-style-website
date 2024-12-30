import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_APP_TITLE": JSON.stringify(process.env.VITE_APP_TITLE),
    "process.env.VITE_APP_ICON": JSON.stringify(process.env.VITE_APP_ICON),
    "process.env.VITE_APP_BACKGROUND_COLOR": JSON.stringify(process.env.VITE_APP_BACKGROUND_COLOR),
    "process.env.VITE_APP_BUSINESS_CARD_PRIMARY_COLOR": JSON.stringify(process.env.VITE_APP_BUSINESS_CARD_PRIMARY_COLOR),
    "process.env.VITE_APP_BUSINESS_CARD_SECONDARY_COLOR": JSON.stringify(process.env.VITE_APP_BUSINESS_CARD_SECONDARY_COLOR),
    "process.env.VITE_APP_BUSINESS_CARD_TITLE": JSON.stringify(process.env.VITE_APP_BUSINESS_CARD_TITLE),
    "process.env.VITE_APP_BUSINESS_CARD_SUB_TITLE": JSON.stringify(process.env.VITE_APP_BUSINESS_CARD_SUB_TITLE),
    "process.env.VITE_APP_BUSINESS_CARD_INITIALS": JSON.stringify(process.env.VITE_APP_BUSINESS_CARD_INITIALS),
    "process.env.VITE_APP_BUSINESS_CARD_MOTTO": JSON.stringify(process.env.VITE_APP_BUSINESS_CARD_MOTTO),
    "process.env.VITE_APP_BUSINESS_CARD_VERSION": JSON.stringify(process.env.VITE_APP_BUSINESS_CARD_VERSION),
    "process.env.VITE_APP_BUSINESS_CARD_CONTACT_PHONE": JSON.stringify(process.env.VITE_APP_BUSINESS_CARD_CONTACT_PHONE),
    "process.env.VITE_APP_BUSINESS_CARD_CONTACT_GITHUB": JSON.stringify(process.env.VITE_APP_BUSINESS_CARD_CONTACT_GITHUB),
    "process.env.VITE_APP_BUSINESS_CARD_CONTACT_LINKEDIN": JSON.stringify(process.env.VITE_APP_BUSINESS_CARD_CONTACT_LINKEDIN),
    "process.env.VITE_APP_BUSINESS_CARD_CONTACT_EMAIL": JSON.stringify(process.env.VITE_VERCEL_ENV),
  },
});
