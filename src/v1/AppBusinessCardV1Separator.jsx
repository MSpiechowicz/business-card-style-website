import PropTypes from "prop-types";

function AppBusinessCardV1Separator({ primaryColor }) {
  return (
    <div className="app__business-card__v1__separator" role="separator" aria-hidden="true">
      <hr
        style={{
          borderColor: primaryColor,
        }}
        aria-hidden="true"
      />
    </div>
  );
}

AppBusinessCardV1Separator.propTypes = {
  primaryColor: PropTypes.string.isRequired,
};

export default AppBusinessCardV1Separator;
