export function getBusinessCardPrimaryColor() {
  return import.meta.env.VITE_APP_BUSINESS_CARD_PRIMARY_COLOR || "#000000";
}

export function getBusinessCardTitle() {
  return import.meta.env.VITE_APP_BUSINESS_CARD_TITLE || "Business Card Title";
}

export function getBusinessCardSubTitle() {
  return import.meta.env.VITE_APP_BUSINESS_CARD_SUB_TITLE || "Business Card Sub Title";
}

export function getBusinessCardMotto() {
  return import.meta.env.VITE_APP_BUSINESS_CARD_MOTTO || "Business Card Motto";
}

export function getBusinessCardImage() {
  return import.meta.env.VITE_APP_BUSINESS_CARD_IMAGE || "src/assets/world.svg";
}
