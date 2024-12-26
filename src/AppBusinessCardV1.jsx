import AppBusinessCardV1Contact from "./AppBusinessCardV1Contact";
import BusinessCard from "./objects/v1/BusinessCard";

function AppBusinessCardV1() {
  return (
    <div className="app__business-card__container">
      <div className="app__business-card">
        <div className="app__business-card__top-decoration" role="separator">
          <hr
            style={{
              borderColor: BusinessCard.primaryColor,
            }}
            aria-hidden="true"
          />
        </div>
        <div className="app__business-card__content" role="main">
          <h1
            style={{
              color: BusinessCard.primaryColor,
            }}
            aria-label="Business Card Title"
          >
            {BusinessCard.title}
          </h1>
          <h2 aria-label="Business Card Sub Title">{BusinessCard.subTitle}</h2>
          <p aria-label="Business Card Motto">{BusinessCard.motto}</p>
        </div>
        <div className="app__business-card__image" aria-hidden="true">
          <img src={BusinessCard.backgroundImage} alt="Business Card Middle Decoration" />
        </div>
        <div className="app__business-card__bottom-decoration" role="separator" aria-hidden="true">
          <hr
            style={{
              borderColor: BusinessCard.primaryColor,
            }}
            aria-hidden="true"
          />
        </div>
      </div>
      <AppBusinessCardV1Contact primaryColor={BusinessCard.primaryColor} />
    </div>
  );
}

export default AppBusinessCardV1;
