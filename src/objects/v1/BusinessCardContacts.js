import { getMainAssetsPath } from "../../utils/getMainAssetsPath";

const businessCardContacts = {
  phone: import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_PHONE || undefined,
  github: import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_GITHUB || undefined,
  linkedIn: import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_LINKEDIN || undefined,
  email: import.meta.env.VITE_APP_BUSINESS_CARD_CONTACT_EMAIL || undefined,
};

const mainAssetsPath = `${getMainAssetsPath()}/v1`;

const items = [
  {
    id: "phone",
    icon: `${mainAssetsPath}/phone.svg`,
    link: `tel:${businessCardContacts.phone}`,
    visible: businessCardContacts.phone !== undefined,
  },
  {
    id: "github",
    icon: `${mainAssetsPath}/github.svg`,
    link: businessCardContacts.github,
    visible: businessCardContacts.github !== undefined,
  },
  {
    id: "linkedIn",
    icon: `${mainAssetsPath}/linkedin.svg`,
    link: businessCardContacts.linkedIn,
    visible: businessCardContacts.linkedIn !== undefined,
  },
  {
    id: "email",
    icon: `${mainAssetsPath}/email.svg`,
    link: `mailto:${businessCardContacts.email}`,
    visible: businessCardContacts.email !== undefined,
  },
];

const sortedAndFilteredItems = items
  .filter((item) => item.visible)
  .sort((a, b) => a.id.localeCompare(b.id));

export default sortedAndFilteredItems;
