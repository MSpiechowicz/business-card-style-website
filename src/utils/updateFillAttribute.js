export function updateFillAttributeWithColor(svg, color) {
  const selectors = ["path", "rect", "circle"];

  selectors.forEach((selector) => {
    svg.querySelectorAll(selector).forEach((element) => {
      element.setAttribute("fill", color);
    });
  });
}
