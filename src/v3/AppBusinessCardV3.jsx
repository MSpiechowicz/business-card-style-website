import AppBusinessCardV3Contact from "./AppBusinessCardV3Contact.jsx";
import AppBusinessCardV3Content from "./AppBusinessCardV3Content.jsx";
import AppBusinessCardV3Image from "./AppBusinessCardV3Image.jsx";
import BusinessCardV3 from "./BusinessCardV3.js";

function AppBusinessCardV3() {
  const BusinessCard = new BusinessCardV3();

  return (
    <div className="app__business-card__v3__container">
      <div className="app__business-card__v3">
        <AppBusinessCardV3Content
          title={BusinessCard.title}
          subTitle={BusinessCard.subTitle}
          motto={BusinessCard.motto}
          primaryColor={BusinessCard.primaryColor}
        />
        <AppBusinessCardV3Contact
          primaryColor={BusinessCard.primaryColor}
          secondaryColor={BusinessCard.secondaryColor}
          contactItems={BusinessCard.getContactItems()}
          leaf={BusinessCard.leaf}
        />
        <AppBusinessCardV3Image
          primaryColor={BusinessCard.primaryColor}
          backgroundImage={BusinessCard.backgroundImage}
        />
      </div>
    </div>
  );
}

export default AppBusinessCardV3;
