import AppBusinessCardV2Contact from "./AppBusinessCardV2Contact.jsx";
import AppBusinessCardV2Content from "./AppBusinessCardV2Content.jsx";
import AppBusinessCardV2Image from "./AppBusinessCardV2Image.jsx";
import BusinessCardV2 from "./BusinessCardV2.js";

function AppBusinessCardV2() {
  const BusinessCard = new BusinessCardV2();

  return (
    <div className="app__business-card__v2__container">
      <div className="app__business-card__v2">
        <AppBusinessCardV2Content
          title={BusinessCard.title}
          subTitle={BusinessCard.subTitle}
          phone={BusinessCard.phone}
          linkedIn={BusinessCard.linkedIn}
          github={BusinessCard.github}
          email={BusinessCard.email}
        />
        <AppBusinessCardV2Contact
          primaryColor={BusinessCard.primaryColor}
          secondaryColor={BusinessCard.secondaryColor}
          contactItems={BusinessCard.getContactItems()}
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
