export function hexToRgba(hex, alpha = 1) {
  // Remove the hash (#) if it's present
  hex = hex.replace('#', '');

  // Parse the red, green, and blue components from the hex string
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Return the RGBA string
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
