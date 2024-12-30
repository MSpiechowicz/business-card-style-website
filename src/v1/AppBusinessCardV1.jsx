import AppBusinessCardV1BackgroundImage from "./AppBusinessCardV1BackgroundImage.jsx";
import AppBusinessCardV1Contact from "./AppBusinessCardV1Contact.jsx";
import AppBusinessCardV1Content from "./AppBusinessCardV1Content.jsx";
import AppBusinessCardV1Separator from "./AppBusinessCardV1Separator.jsx";
import BusinessCardV1 from "./BusinessCardV1.js";

function AppBusinessCardV1() {
  const BusinessCard = new BusinessCardV1();

  return (
    <div className="app__business-card__v1__container">
      <div className="app__business-card__v1">
        <AppBusinessCardV1Separator primaryColor={BusinessCard.primaryColor} />
        <AppBusinessCardV1Content
          primaryColor={BusinessCard.primaryColor}
          title={BusinessCard.title}
          subTitle={BusinessCard.subTitle}
          motto={BusinessCard.motto}
        />
        <AppBusinessCardV1BackgroundImage backgroundImage={BusinessCard.backgroundImage} />
        <AppBusinessCardV1Separator primaryColor={BusinessCard.primaryColor} />
      </div>
      <AppBusinessCardV1Contact
        primaryColor={BusinessCard.primaryColor}
        contactItems={BusinessCard.getContactItems()}
      />
    </div>
  );
}

export default AppBusinessCardV1;
