import { getMainAssetsPath } from "../../utils/getMainAssetsPath";

const mainAssetsPath = `${getMainAssetsPath()}/v1`;

const BusinessCard = {
  primaryColor: import.meta.env.VITE_APP_BUSINESS_CARD_PRIMARY_COLOR || "#0D4398",
  secondaryColor: import.meta.env.VITE_APP_BUSINESS_CARD_SECONDARY_COLOR || "#FFFFFF",
  title: import.meta.env.VITE_APP_BUSINESS_CARD_TITLE || "Business Card Title",
  subTitle: import.meta.env.VITE_APP_BUSINESS_CARD_SUB_TITLE || "Business Card Sub Title",
  motto: import.meta.env.VITE_APP_BUSINESS_CARD_MOTTO || "Business Card Motto",
  backgroundImage: `${mainAssetsPath}/backgroundImage.svg`,
  emailImage: `${mainAssetsPath}/email.svg`,
  phoneImage: `${mainAssetsPath}/phone.svg`,
  linkedinImage: `${mainAssetsPath}/linkedin.svg`,
  githubImage: `${mainAssetsPath}/github.svg`,
}

export default BusinessCard;
