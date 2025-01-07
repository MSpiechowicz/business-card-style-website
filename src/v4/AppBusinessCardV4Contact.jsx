import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import { updateFillAttributeWithColor } from "../utils/updateFillAttribute";

function AppBusinessCardV4Contact({ primaryColor, secondaryColor, contactItems }) {
  return (
    <div
      className="app__business-card__v4__contact"
      role="contentinfo"
      aria-labelledby="contact-info"
    >
      {contactItems?.map((item, index) => {
        return (
          <div key={index} className="app__business-card__v4__contact__item__container">
            <div
              key={item.id}
              className="app__business-card__v4__contact__item"
              style={{
                backgroundColor: "transparent",
              }}
            >
              <ReactSVG
                className="app__business-card__v4__contact__item__icon"
                src={item.icon}
                beforeInjection={(svg) => updateFillAttributeWithColor(svg, "black")}
              />
            </div>
            <a href={item.link} target="_blank" rel="noreferrer" aria-label={item.id}>
              {item.label}
            </a>
          </div>
        );
      })}
    </div>
  );
}

AppBusinessCardV4Contact.propTypes = {
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
  label: PropTypes.string.isRequired,
};

export default AppBusinessCardV4Contact;
