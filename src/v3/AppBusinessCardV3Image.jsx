import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";

function AppBusinessCardV3Image({ primaryColor, backgroundImage }) {
  return (
    <div className="app__business-card__v3__image">
      <ReactSVG
        className="app__business-card__v3__image__background"
        src={backgroundImage}
        beforeInjection={(svg) => {
          const selectors = ["path", "rect", "circle"];

          selectors.forEach((selector) => {
            svg.querySelectorAll(selector).forEach((element) => {
              element.setAttribute("fill", primaryColor);
            });
          });
        }}
      />
      <ReactSVG
        className="app__business-card__v3__image__background"
        src={backgroundImage}
        beforeInjection={(svg) => {
          const selectors = ["path", "rect", "circle"];

          selectors.forEach((selector) => {
            svg.querySelectorAll(selector).forEach((element) => {
              element.setAttribute("fill", primaryColor);
            });
          });
        }}
      />
    </div>
  );
}

AppBusinessCardV3Image.propTypes = {
  primaryColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default AppBusinessCardV3Image;
