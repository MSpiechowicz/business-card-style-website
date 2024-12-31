export function updateFillAttributeWithColor(svg, color) {
  const selectors = ["path", "rect", "circle", "polygon", "ellipse"];

  selectors.forEach((selector) => {
    svg.querySelectorAll(selector).forEach((element) => {
      element.setAttribute("fill", color);
    });
  });
}
