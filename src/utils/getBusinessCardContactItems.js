import {
  getBusinessCardContactEmail,
  getBusinessCardContactGitHub,
  getBusinessCardContactLinkenIn,
  getBusinessCardContactPhone,
} from "./getBusinessCardEnvVariables";

const phoneContact = getBusinessCardContactPhone();
const githubContact = getBusinessCardContactGitHub();
const linkedInContact = getBusinessCardContactLinkenIn();
const emailContact = getBusinessCardContactEmail();

const items = [
  {
    id: "phone",
    icon: "src/assets/phone.svg",
    link: `tel:${phoneContact}`,
    visible: phoneContact !== undefined,
  },
  {
    id: "github",
    icon: "src/assets/github.svg",
    link: githubContact,
    visible: githubContact !== undefined,
  },
  {
    id: "linkedIn",
    icon: "src/assets/linkedin.svg",
    link: linkedInContact,
    visible: linkedInContact !== undefined,
  },
  {
    id: "email",
    icon: "src/assets/email.svg",
    link: `mailto:${emailContact}`,
    visible: emailContact !== undefined,
  },
];

export function getBusinessCardContactItems() {
  return items.filter((item) => item.visible);
}
