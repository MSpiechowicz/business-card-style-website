import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import { updateFillAttributeWithColor } from "../utils/updateFillAttribute";

function AppBusinessCardV4Image({ primaryColor, image }) {
  return (
    <div className="app__business-card__v4__image">
      <ReactSVG
        className="app__business-card__v4__image__background"
        src={image}
        beforeInjection={(svg) => updateFillAttributeWithColor(svg, "#000")}
      />
    </div>
  );
}

AppBusinessCardV4Image.propTypes = {
  primaryColor: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default AppBusinessCardV4Image;
