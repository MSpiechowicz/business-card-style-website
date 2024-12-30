import { BusinessCardContactsAssetsPaths } from "../objects/BusinessCardAssetsPath";
import { BusinessCardContacts } from "../objects/BusinessCardContacts";
import AppBusinessCardV2Contact from "./AppBusinessCardV2Contact";
import AppBusinessCardV2Content from "./AppBusinessCardV2Content";
import AppBusinessCardV2Image from "./AppBusinessCardV2Image";
import BusinessCardV2 from "./BusinessCardV2";

function AppBusinessCardV2() {
  const BusinessCard = new BusinessCardV2();
  const Contacts = new BusinessCardContacts(BusinessCardContactsAssetsPaths.v2);

  return (
    <div className="app__business-card__v2__container">
      <div className="app__business-card__v2">
        <AppBusinessCardV2Content
          title={BusinessCard.title}
          subTitle={BusinessCard.subTitle}
          phone={Contacts.phone}
          linkedIn={Contacts.linkedIn}
          github={Contacts.github}
          email={Contacts.email}
        />
        <AppBusinessCardV2Contact
          primaryColor={BusinessCard.primaryColor}
          secondaryColor={BusinessCard.secondaryColor}
        />
        <AppBusinessCardV2Image
          primaryColor={BusinessCard.primaryColor}
          initials={BusinessCard.initials}
        />
      </div>
    </div>
  );
}

export default AppBusinessCardV2;
