import PropTypes from "prop-types";
import { updateFillAttributeWithColor } from "../utils/updateFillAttribute";
import AppSvg from "../components/AppSvg";

function AppBusinessCardV4Image({ primaryColor, image }) {
  return (
    <div className="app__business-card__v4__image"
      aria-hidden="true"
      role="presentation"
    >
      <AppSvg
        src={image}
        color={primaryColor}
        className="app__business-card__v4__image__background"
        withWrapper={false}
        style={{
          border: `3px solid ${primaryColor}`,
        }}
      />
    </div>
  );
}

AppBusinessCardV4Image.propTypes = {
  primaryColor: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default AppBusinessCardV4Image;
