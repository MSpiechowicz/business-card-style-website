import PropTypes from "prop-types";
import React from "react";
import { ReactSVG } from "react-svg";
import { updateFillAttributeWithColor } from "../utils/updateFillAttribute";

function AppSvg({
  src,
  color,
  link = "",
  id = null,
  className = "",
  withWrapper = true,
  style = {},
}) {
  const Svg = React.memo(
    () => (
      <ReactSVG
        className={className}
        src={src}
        beforeInjection={(svg) => {
          updateFillAttributeWithColor(svg, color);
          svg.setAttribute("aria-hidden", "true");
          svg.setAttribute("role", "presentation");
        }}
        style={style}
      />
    ),
    [src, color, className, style]
  );

  Svg.displayName = "SvgComponent";

  return withWrapper ? (
    <a href={link} target="_blank" rel="noreferrer" aria-label={id}>
      <Svg />
    </a>
  ) : (
    <Svg />
  );
}

AppSvg.propTypes = {
  src: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  link: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  withWrapper: PropTypes.bool,
  style: PropTypes.object,
};

export default AppSvg;
