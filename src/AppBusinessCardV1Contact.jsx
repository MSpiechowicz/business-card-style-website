import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import BusinessCardContacts from "./objects/v1/BusinessCardContacts";

function AppBusinessCardV1Contact({ primaryColor }) {
  return (
    <div className="app__business-card__contact" role="contentinfo">
      {BusinessCardContacts?.map((item) => {
        return (
          <div
            key={item.id}
            className="app__business-card__contact__item"
            style={{
              backgroundColor: primaryColor,
            }}
          >
            <a href={item.link} target="_blank" rel="noreferrer">
              <ReactSVG
                className="app__business-card__contact__item__icon"
                src={item.icon}
                beforeInjection={(svg) => {
                  const selectors = ["path", "rect", "circle"];

                  selectors.forEach((selector) => {
                    svg.querySelectorAll(selector).forEach((element) => {
                      element.setAttribute("fill", primaryColor);
                    });
                  });
                }}
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
};

export default AppBusinessCardV1Contact;
