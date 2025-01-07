import PropTypes from "prop-types";
import AppSvg from "../components/AppSvg";

function AppBusinessCardV3Image({ primaryColor, backgroundImage }) {
  const svgElements = Array.from({ length: 2 }).map((_, index) => (
    <AppSvg
      key={index}
      src={backgroundImage}
      color={primaryColor}
      className="app__business-card__v3__image__background"
      withWrapper={false}
    />
  ));

  return <div className="app__business-card__v3__image">{svgElements}</div>;
}

AppBusinessCardV3Image.propTypes = {
  primaryColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default AppBusinessCardV3Image;
