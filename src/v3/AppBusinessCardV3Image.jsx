import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import { updateFillAttributeWithColor } from "../utils/updateFillAttribute";

function AppBusinessCardV3Image({ primaryColor, backgroundImage }) {
  const svgElements = Array.from({ length: 2 }).map((_, index) => (
    <ReactSVG
      key={index}
      className="app__business-card__v3__image__background"
      src={backgroundImage}
      beforeInjection={(svg) => updateFillAttributeWithColor(svg, primaryColor)}
    />
  ));

  return <div className="app__business-card__v3__image">{svgElements}</div>;
}

AppBusinessCardV3Image.propTypes = {
  primaryColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default AppBusinessCardV3Image;
