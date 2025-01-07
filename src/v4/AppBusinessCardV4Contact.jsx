import PropTypes from "prop-types";
import { useState } from "react";
import AppSvg from "../components/AppSvg";
import { hexToRgba } from "../utils/hexToRgba";

function AppBusinessCardV4Contact({ primaryColor, contactItems }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="app__business-card__v4__contact" role="list" aria-labelledby="contact-info">
      {contactItems?.map((item, index) => {
        return (
          <div
            key={index}
            className="app__business-card__v4__contact__item__container"
            role="listitem"
          >
            <div
              key={item.id}
              className="app__business-card__v4__contact__item"
              style={{
                backgroundColor: "transparent",
                border: `1px solid ${primaryColor}`,
              }}
              aria-hidden="true"
            >
              <AppSvg
                src={item.icon}
                color={primaryColor}
                className="app__business-card__v4__contact__item__icon"
                withWrapper={false}
              />
            </div>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${item.label} - Opens in new tab`}
              style={{
                color: primaryColor,
                textDecorationColor:
                  hoveredIndex === index ? hexToRgba(primaryColor, 1) : hexToRgba(primaryColor, 0),
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
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
  contactItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default AppBusinessCardV4Contact;
