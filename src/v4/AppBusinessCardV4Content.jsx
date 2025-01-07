import PropTypes from "prop-types";
import AppSvg from "../components/AppSvg";

function AppBusinessCardV4Content({ title, subTitle, dot, primaryColor }) {
  return (
    <div className="app__business-card__v4__content" role="region">
      <h1
        aria-label="Business Card Title"
        style={{
          color: primaryColor,
        }}
      >
        {String(title).toUpperCase()}
      </h1>
      <AppSvg src={dot} color={primaryColor} withWrapper={false} />
      <h2
        aria-label="Business Card Sub Title"
        style={{
          color: primaryColor,
        }}
      >
        {String(subTitle).toUpperCase()}
      </h2>
    </div>
  );
}

AppBusinessCardV4Content.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  dot: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
};

export default AppBusinessCardV4Content;
