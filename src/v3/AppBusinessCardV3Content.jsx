import PropTypes from "prop-types";

function AppBusinessCardV3Content({ title, subTitle, motto, primaryColor }) {
  return (
    <div className="app__business-card__v3__content" role="main">
      <h1
        aria-label="Business Card Title"
        style={{
          color: primaryColor,
        }}
      >
        {title}
      </h1>
      <h2 aria-label="Business Card Sub Title">{subTitle}</h2>
      <p aria-label="Business Card Motto">{motto}</p>
    </div>
  );
}

AppBusinessCardV3Content.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  motto: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
};

export default AppBusinessCardV3Content;
