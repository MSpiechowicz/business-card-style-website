import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    plugins: [react()],
    define: {
      "process.env": env,
      //VITE_APP_TITLE: JSON.stringify(env.VITE_APP_TITLE),
      //VITE_APP_ICON: JSON.stringify(process.env.VITE_APP_ICON),
      //VITE_APP_BACKGROUND_COLOR: JSON.stringify(process.env.VITE_APP_BACKGROUND_COLOR),
      //VITE_APP_BUSINESS_CARD_PRIMARY_COLOR: JSON.stringify(
      //  process.env.VITE_APP_BUSINESS_CARD_PRIMARY_COLOR
      //),
      //VITE_APP_BUSINESS_CARD_SECONDARY_COLOR: JSON.stringify(
      //  process.env.VITE_APP_BUSINESS_CARD_SECONDARY_COLOR
      //),
      //VITE_APP_BUSINESS_CARD_TITLE: JSON.stringify(process.env.VITE_APP_BUSINESS_CARD_TITLE),
      //VITE_APP_BUSINESS_CARD_SUB_TITLE: JSON.stringify(
      //  process.env.VITE_APP_BUSINESS_CARD_SUB_TITLE
      //),
      //VITE_APP_BUSINESS_CARD_INITIALS: JSON.stringify(process.env.VITE_APP_BUSINESS_CARD_INITIALS),
      //VITE_APP_BUSINESS_CARD_MOTTO: JSON.stringify(process.env.VITE_APP_BUSINESS_CARD_MOTTO),
      VITE_APP_BUSINESS_CARD_VERSION: JSON.stringify(process.env.VITE_APP_BUSINESS_CARD_VERSION),
      //VITE_APP_BUSINESS_CARD_CONTACT_PHONE: JSON.stringify(
      //  process.env.VITE_APP_BUSINESS_CARD_CONTACT_PHONE
      //),
      //VITE_APP_BUSINESS_CARD_CONTACT_GITHUB: JSON.stringify(
      //  process.env.VITE_APP_BUSINESS_CARD_CONTACT_GITHUB
      //),
      //VITE_APP_BUSINESS_CARD_CONTACT_LINKEDIN: JSON.stringify(
      //  process.env.VITE_APP_BUSINESS_CARD_CONTACT_LINKEDIN
      //),
      //VITE_APP_BUSINESS_CARD_CONTACT_EMAIL: JSON.stringify(process.env.VITE_VERCEL_ENV),
    },
  });
};
