import PropTypes from "prop-types";

function AppBusinessCardV2Content({ title, subTitle }) {
  return (
    <div className="app__business-card__v2__content" role="main">
      <h1 aria-label="Business Card Title">{String(title).toUpperCase()}</h1>
      <h2 aria-label="Business Card Sub Title">{String(subTitle).toUpperCase()}</h2>
    </div>
  );
}

AppBusinessCardV2Content.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default AppBusinessCardV2Content;
