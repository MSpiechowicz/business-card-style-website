import { BusinessCardContactsAssetsPaths } from "./BusinessCardAssetsPath";

export class BusinessCard {
  constructor(assetsPath = BusinessCardContactsAssetsPaths.default) {
    // Generic Information
    this.primaryColor = import.meta.env.VITE_APP_BUSINESS_CARD_PRIMARY_COLOR || "#0D4398";
    this.secondaryColor = import.meta.env.VITE_APP_BUSINESS_CARD_SECONDARY_COLOR || "#FFFFFF";
    this.title = import.meta.env.VITE_APP_BUSINESS_CARD_TITLE || "Business Card Title";
    this.subTitle = import.meta.env.VITE_APP_BUSINESS_CARD_SUB_TITLE || "Business Card Sub Title";
    this.initials = import.meta.env.VITE_APP_BUSINESS_CARD_INITIALS || "BC";
    this.motto = import.meta.env.VITE_APP_BUSINESS_CARD_MOTTO || "Business Card Motto";

    // Assets Path
    this.assetsPath = assetsPath;

    // Contact Information
    this.phone = import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_PHONE || undefined;
    this.github = import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_GITHUB || undefined;
    this.linkedIn = import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_LINKEDIN || undefined;
    this.email = import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_EMAIL || undefined;
    this.website = import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_WEBSITE || undefined;

    this.contactItems = [
      {
        id: "phone",
        icon: `${this.assetsPath}/phone.svg`,
        link: `tel:${this.phone}`,
        visible: this.phone !== undefined,
        label: this.phone,
      },
      {
        id: "github",
        icon: `${this.assetsPath}/github.svg`,
        link: this.github,
        visible: this.github !== undefined,
        label: this.github ? new URL(this.github).origin : undefined,
      },
      {
        id: "linkedIn",
        icon: `${this.assetsPath}/linkedin.svg`,
        link: this.linkedIn,
        visible: this.linkedIn !== undefined,
        label: this.linkedIn ? new URL(this.linkedIn).origin : undefined,
      },
      {
        id: "email",
        icon: `${this.assetsPath}/email.svg`,
        link: `mailto:${this.email}`,
        visible: this.email !== undefined,
        label: this.email,
      },
      {
        id: "website",
        icon: `${this.assetsPath}/website.svg`,
        link: this.website || undefined,
        visible: this.website !== undefined,
        label: this.website ? new URL(this.website).origin : undefined,
      }
    ];
  }

  getPhoneContactItem() {
    return this.contactItems.find((item) => item.id === "phone");
  }

  getGitHubContactItem() {
    return this.contactItems.find((item) => item.id === "github");
  }

  getLinkedInContactItem() {
    return this.contactItems.find((item) => item.id === "linkedIn");
  }

  getEmailContactItem() {
    return this.contactItems.find((item) => item.id === "email");
  }

  getWebsiteContactItem() {
    return this.contactItems.find((item) => item.id === "website");
  }

  getContactItems() {
    return this.contactItems
      .filter((item) => item.visible)
      .sort((a, b) => a.id.localeCompare(b.id));
  }
}
