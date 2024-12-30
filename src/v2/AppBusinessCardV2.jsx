import AppBusinessCardV1BackgroundImage from "../v1/AppBusinessCardV1BackgroundImage";
import AppBusinessCardV1Contact from "../v1/AppBusinessCardV1Contact";
import AppBusinessCardV1Content from "../v1/AppBusinessCardV1Content";
import AppBusinessCardV1Separator from "../v1/AppBusinessCardV1Separator";
import BusinessCardV2 from "./BusinessCardV2";

function AppBusinessCardV2() {
  const BusinessCard = new BusinessCardV2();

  return (
    <div className="app__business-card__v2__container">
      <div className="app__business-card__v2">
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

export default AppBusinessCardV2;
