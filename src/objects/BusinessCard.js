export class BusinessCard {
  constructor(assetsPath) {
    this.assetsPath = assetsPath;

    this.primaryColor = import.meta.env.VITE_APP_BUSINESS_CARD_PRIMARY_COLOR || "#0D4398";
    this.secondaryColor = import.meta.env.VITE_APP_BUSINESS_CARD_SECONDARY_COLOR || "#FFFFFF";
    this.title = import.meta.env.VITE_APP_BUSINESS_CARD_TITLE || "Business Card Title";
    this.subTitle = import.meta.env.VITE_APP_BUSINESS_CARD_SUB_TITLE || "Business Card Sub Title";
    this.initials = import.meta.env.VITE_APP_BUSINESS_CARD_INITIALS || "BC";
    this.motto = import.meta.env.VITE_APP_BUSINESS_CARD_MOTTO || "Business Card Motto";

    this.backgroundImage = `${this.assetsPath}/backgroundImage.svg`;
    this.emailImage = `${this.assetsPath}/email.svg`;
    this.phoneImage = `${this.assetsPath}/phone.svg`;
    this.linkedinImage = `${this.assetsPath}/linkedin.svg`;
    this.githubImage = `${this.assetsPath}/github.svg`;
  }
}
