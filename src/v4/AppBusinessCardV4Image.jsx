import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import { updateFillAttributeWithColor } from "../utils/updateFillAttribute";

function AppBusinessCardV4Image({ primaryColor, image }) {
  return (
    <div className="app__business-card__v4__image"
      aria-hidden="true"
      role="presentation"
    >
      <ReactSVG
        className="app__business-card__v4__image__background"
        src={image}
        beforeInjection={(svg) => updateFillAttributeWithColor(svg, primaryColor)}
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
