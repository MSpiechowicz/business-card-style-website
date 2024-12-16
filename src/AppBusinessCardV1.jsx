import {
  getBusinessCardImage,
  getBusinessCardMotto,
  getBusinessCardPrimaryColor,
  getBusinessCardSubTitle,
  getBusinessCardTitle,
} from "./utils/getBusinessCardEnvVariables";

const businessCardPrimaryColor = getBusinessCardPrimaryColor();
const businessCardTitle = getBusinessCardTitle();
const businessCardSubTitle = getBusinessCardSubTitle();
const businessCardMotto = getBusinessCardMotto();
const businessCardImage = getBusinessCardImage();

function AppBusinessCardV1() {
  return (
    <div className="app__business-card">
      <div className="app__business-card__top-decoration" role="separator">
        <hr
          style={{
            borderColor: businessCardPrimaryColor,
          }}
          aria-hidden="true"
        />
      </div>
      <div className="app__business-card__content" role="main">
        <h1
          style={{
            color: businessCardPrimaryColor,
          }}
          aria-label="Business Card Title"
        >
          {businessCardTitle}
        </h1>
        <h2 aria-label="Business Card Sub Title">{businessCardSubTitle}</h2>
        <p aria-label="Business Card Motto">{businessCardMotto}</p>
      </div>
      <div className="app__business-card__image" aria-hidden="true">
        <img src={businessCardImage} alt="Business Card Middle Decoration" />
      </div>
      <div className="app__business-card__bottom-decoration" role="separator" aria-hidden="true">
        <hr
          style={{
            borderColor: businessCardPrimaryColor,
          }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default AppBusinessCardV1;
