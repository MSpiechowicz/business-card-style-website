import PropTypes from "prop-types";

function AppBusinessCardV2Image({ primaryColor, initials }) {
  return (
    <div className="app__business-card__v2__image">
      <svg
        viewBox="0 0 100 100"
        className="app__business-card__v2__image__hexagon"
        style={{
          fill: primaryColor,
        }}
      >
        <polygon points="50,1 90,25 90,75 50,99 10,75 10,25" />
        <text x="50%" y="50%" textAnchor="middle" dy=".3em">
          {initials}
        </text>
      </svg>
    </div>
  );
}

AppBusinessCardV2Image.propTypes = {
  primaryColor: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
};

export default AppBusinessCardV2Image;
