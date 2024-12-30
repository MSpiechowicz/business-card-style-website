import PropTypes from "prop-types";

function AppBusinessCardV1Content({ primaryColor, title, subTitle, motto }) {
  return (
    <div className="app__business-card__v1__content" role="main">
      <h1
        style={{
          color: primaryColor,
        }}
        aria-label="Business Card Title"
      >
        {title}
      </h1>
      <h2 aria-label="Business Card Sub Title">{subTitle}</h2>
      <p aria-label="Business Card Motto">{motto}</p>
    </div>
  );
}

AppBusinessCardV1Content.propTypes = {
  primaryColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  motto: PropTypes.string.isRequired,
};

export default AppBusinessCardV1Content;
