import AppBusinessCardV1BackgroundImage from "./AppBusinessCardV1BackgroundImage";
import AppBusinessCardV1Contact from "./AppBusinessCardV1Contact";
import AppBusinessCardV1Content from "./AppBusinessCardV1Content";
import AppBusinessCardV1Separator from "./AppBusinessCardV1Separator";
import BusinessCard from "./objects/v1/BusinessCard";

function AppBusinessCardV1() {
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
      <AppBusinessCardV1Contact primaryColor={BusinessCard.primaryColor} />
    </div>
  );
}

export default AppBusinessCardV1;
