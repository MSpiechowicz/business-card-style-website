import AppBusinessCardV4Contact from "./AppBusinessCardV4Contact.jsx";
import AppBusinessCardV4Content from "./AppBusinessCardV4Content.jsx";
import AppBusinessCardV4Image from "./AppBusinessCardV4Image.jsx";
import BusinessCardV4 from "./BusinessCardV4.js";

function AppBusinessCardV4() {
  const BusinessCard = new BusinessCardV4();

  return (
    <div className="app__business-card__v4__container">
      <div className="app__business-card__v4">
        <div
          className="app__business-card__v4__left"
          style={{ backgroundColor: BusinessCard.primaryColor }}
        >
          <AppBusinessCardV4Image
            primaryColor={BusinessCard.primaryColor}
            image={BusinessCard.user}
          />
        </div>
        <div
          className="app__business-card__v4__right"
          style={{ border: `1px solid ${BusinessCard.primaryColor}`, borderLeft: "none" }}
        >
          <AppBusinessCardV4Content
            title={BusinessCard.title}
            subTitle={BusinessCard.subTitle}
            dot={BusinessCard.dot}
            primaryColor={BusinessCard.primaryColor}
          />
          <AppBusinessCardV4Contact
            primaryColor={BusinessCard.primaryColor}
            contactItems={BusinessCard.getContactItems()}
          />
        </div>
      </div>
    </div>
  );
}

export default AppBusinessCardV4;
