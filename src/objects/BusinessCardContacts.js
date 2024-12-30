export class BusinessCardContacts {
  constructor(assetsPath) {
    this.assetsPath = assetsPath;

    this.phone = import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_PHONE || undefined;
    this.github = import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_GITHUB || undefined;
    this.linkedIn = import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_LINKEDIN || undefined;
    this.email = import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_EMAIL || undefined;

    this.items = [
      {
        id: "phone",
        icon: `${this.assetsPath}/phone.svg`,
        link: `tel:${this.phone}`,
        visible: this.phone !== undefined,
      },
      {
        id: "github",
        icon: `${this.assetsPath}/github.svg`,
        link: this.github,
        visible: this.github !== undefined,
      },
      {
        id: "linkedIn",
        icon: `${this.assetsPath}/linkedin.svg`,
        link: this.linkedIn,
        visible: this.linkedIn !== undefined,
      },
      {
        id: "email",
        icon: `${this.assetsPath}/email.svg`,
        link: `mailto:${this.email}`,
        visible: this.email !== undefined,
      },
    ];
  }

  getItems() {
    return this.items.filter((item) => item.visible).sort((a, b) => a.id.localeCompare(b.id));
  }
}
