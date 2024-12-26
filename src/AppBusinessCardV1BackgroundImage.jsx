import PropTypes from "prop-types";

function AppBusinessCardV1BackgroundImage({ backgroundImage }) {
  return (
    <div className="app__business-card__v1__background-image" aria-hidden="true">
      <img src={backgroundImage} alt="Business Card Middle Decoration" />
    </div>
  );
}

AppBusinessCardV1BackgroundImage.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default AppBusinessCardV1BackgroundImage;
