import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import { updateFillAttributeWithColor } from "../utils/updateFillAttribute";

function AppBusinessCardV1Contact({ primaryColor, contactItems }) {
  return (
    <div
      className="app__business-card__v1__contact"
      role="contentinfo"
      aria-labelledby="contact-info"
    >
      {contactItems?.map((item) => {
        return (
          <div
            key={item.id}
            className="app__business-card__v1__contact__item"
            style={{
              backgroundColor: primaryColor,
            }}
          >
            <a href={item.link} target="_blank" rel="noreferrer" aria-label={item.id}>
              <ReactSVG
                className="app__business-card__v1__contact__item__icon"
                src={item.icon}
                beforeInjection={(svg) => updateFillAttributeWithColor(svg, primaryColor)}
                loading="eager"
                wrapper="span"
                preProcessor={(code) => code.replace(/fill=".*?"/g, `fill="${primaryColor}"`)}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}

AppBusinessCardV1Contact.propTypes = {
  primaryColor: PropTypes.string.isRequired,
  contactItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

export default AppBusinessCardV1Contact;
