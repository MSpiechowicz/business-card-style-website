import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";

function AppBusinessCardV4Content({ title, subTitle, dot, primaryColor }) {
  return (
    <div className="app__business-card__v4__content" role="main">
      <h1
        aria-label="Business Card Title"
        style={{
          color: primaryColor,
        }}
      >
        {String(title).toUpperCase()}
      </h1>
      <ReactSVG src={dot} />
      <h2 aria-label="Business Card Sub Title">{subTitle}</h2>
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
