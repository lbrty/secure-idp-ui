import toMaterialStyle from "material-color-hash";
import tinycolor from "tinycolor2";

export function colorFromText(toColor, hue = 200) {
  let mc = toMaterialStyle(toColor, hue);
  let color = tinycolor(mc.backgroundColor);

  color.setAlpha(hue / 1000);

  return color.toRgbString();
}
