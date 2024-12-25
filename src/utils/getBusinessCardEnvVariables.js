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

//export function getBusinessCardContactIconForEmail() {
//  return import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_EMAIL_ICON || "src/assets/email.svg";
//}

//export function getBusinessCardContactIconForPhone() {
//  return import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_PHONE_ICON || "src/assets/phone.svg";
//}

//export function getBusinessCardContactIconForLinkedIn() {
//  return import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_LINKEDIN_ICON || "https://www.svgrepo.com/show/303229/linkedin.svg";
//}

//export function getBusinessCardContactIconForGitHub() {
//  return import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_GITHUB_ICON || "src/assets/github.svg";
//}

export function getBusinessCardContactLinkenIn() {
  return import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_LINKEDIN || undefined;
}

export function getBusinessCardContactGitHub() {
  return import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_GITHUB || undefined;
}

export function getBusinessCardContactEmail() {
  return import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_EMAIL || undefined;
}

export function getBusinessCardContactPhone() {
  return import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_PHONE || undefined;
}
