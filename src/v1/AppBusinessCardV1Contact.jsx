import PropTypes from "prop-types";
import AppSvg from "../components/AppSvg";

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
            <AppSvg
              src={item.icon}
              link={item.link}
              id={item.id}
              color={primaryColor}
              className="app__business-card__v1__contact__item__icon"
            />
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
