
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
        label: this.phone,
      },
      {
        id: "github",
        icon: `${this.assetsPath}/github.svg`,
        link: this.github,
        visible: this.github !== undefined,
        label: new URL(this.github).origin,
      },
      {
        id: "linkedIn",
        icon: `${this.assetsPath}/linkedin.svg`,
        link: this.linkedIn,
        visible: this.linkedIn !== undefined,
        label: new URL(this.linkedIn).origin,
      },
      {
        id: "email",
        icon: `${this.assetsPath}/email.svg`,
        link: `mailto:${this.email}`,
        visible: this.email !== undefined,
        label: this.email,
      },
    ];
  }

  getPhone() {
    return this.items.find((item) => item.id === "phone");
  }

  getGitHub() {
    return this.items.find((item) => item.id === "github");
  }

  getLinkedIn() {
    return this.items.find((item) => item.id === "linkedIn");
  }

  getEmail() {
    return this.items.find((item) => item.id === "email");
  }

  getItems() {
    return this.items.filter((item) => item.visible).sort((a, b) => a.id.localeCompare(b.id));
  }
}
