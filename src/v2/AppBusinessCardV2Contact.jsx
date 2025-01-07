import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import { updateFillAttributeWithColor } from "../utils/updateFillAttribute";

function AppBusinessCardV2Contact({ primaryColor, secondaryColor, contactItems }) {
  return (
    <div
      className="app__business-card__v2__contact"
      role="contentinfo"
      aria-labelledby="contact-info"
    >
      <div
        className="app__business-card__v2__contact__items"
        style={{
          backgroundColor: primaryColor,
        }}
      >
        {contactItems?.map((item) => {
          return (
            <div
              key={item.id}
              className="app__business-card__v2__contact__item"
              style={{
                backgroundColor: "transparent",
              }}
            >
              <ReactSVG
                className="app__business-card__v2__contact__item__icon"
                src={item.icon}
                beforeInjection={(svg) => updateFillAttributeWithColor(svg, secondaryColor)}
                loading="eager"
                wrapper="span"
                preProcessor={(code) => code.replace(/fill=".*?"/g, `fill="${secondaryColor}"`)}
              />
              <a href={item.link} target="_blank" rel="noreferrer" aria-label={item.id}>
                {String(item.label)}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

AppBusinessCardV2Contact.propTypes = {
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  contactItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default AppBusinessCardV2Contact;
