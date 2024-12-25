import PropTypes from "prop-types";
import React from "react";
import { ReactSVG } from "react-svg";
import { getBusinessCardContactItems } from "./utils/getBusinessCardContactItems";

const contactItems = getBusinessCardContactItems();

function AppBusinessCardV1Contact({ businessCardPrimaryColor }) {
  return (
    <div className="app__business-card__contact" role="contentinfo">
      {contactItems?.map((item) => {
        return (
          <div
            key={item.id}
            className="app__business-card__contact__item"
            style={{
              backgroundColor: businessCardPrimaryColor,
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
                      element.setAttribute("fill", businessCardPrimaryColor);
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
  businessCardPrimaryColor: PropTypes.string.isRequired,
};

export default AppBusinessCardV1Contact;
