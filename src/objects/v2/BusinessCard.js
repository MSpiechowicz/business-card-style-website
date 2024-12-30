import { BusinessCardContactsAssetsPaths } from "../BusinessCardAssetsPath";

const BusinessCard = {
  primaryColor: import.meta.env.VITE_APP_BUSINESS_CARD_PRIMARY_COLOR || "#0D4398",
  secondaryColor: import.meta.env.VITE_APP_BUSINESS_CARD_SECONDARY_COLOR || "#FFFFFF",
  title: import.meta.env.VITE_APP_BUSINESS_CARD_TITLE || "Business Card Title",
  subTitle: import.meta.env.VITE_APP_BUSINESS_CARD_SUB_TITLE || "Business Card Sub Title",
  motto: import.meta.env.VITE_APP_BUSINESS_CARD_MOTTO || "Business Card Motto",
  backgroundImage: `${BusinessCardContactsAssetsPaths.version2}/backgroundImage.svg`,
  emailImage: `${BusinessCardContactsAssetsPaths.version2}/email.svg`,
  phoneImage: `${BusinessCardContactsAssetsPaths.version2}/phone.svg`,
  linkedinImage: `${BusinessCardContactsAssetsPaths.version2}/linkedin.svg`,
  githubImage: `${BusinessCardContactsAssetsPaths.version2}/github.svg`,
}

export default BusinessCard;
