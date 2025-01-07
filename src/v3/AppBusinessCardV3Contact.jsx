import PropTypes from "prop-types";
import AppSvg from "../components/AppSvg";

function AppBusinessCardV3Contact({ primaryColor, secondaryColor, contactItems, leaf }) {
  return (
    <div
      className="app__business-card__v3__contact"
      role="contentinfo"
      aria-labelledby="contact-info"
    >
      {contactItems?.map((item) => {
        return (
          <div
            key={item.id}
            className="app__business-card__v3__contact__item"
            style={{
              backgroundColor: "transparent",
            }}
          >
            <a href={item.link} target="_blank" rel="noreferrer" aria-label={item.id}>
              <AppSvg
                src={leaf}
                color={primaryColor}
                className="app__business-card__v3__contact__item__leaf__icon"
                withWrapper={false}
              />
              <AppSvg
                src={item.icon}
                color={secondaryColor}
                className="app__business-card__v3__contact__item__icon"
                withWrapper={false}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}

AppBusinessCardV3Contact.propTypes = {
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
  leaf: PropTypes.string.isRequired,
};

export default AppBusinessCardV3Contact;
