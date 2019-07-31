const ColorGenerator = {
  generateColor(luminance, red) {
    const gbLuminance = luminance - 0.2126 * red;
    if (gbLuminance < 0) {
      return null;
    }
    const gbUnitsNeeded = gbLuminance / (0.7152 + 0.0722);
    if (gbUnitsNeeded > red ) {
      return null;
    }
    const RGB = (color) => {
      return 1.055 * Math.pow(color, (1/2.4)) - 0.055;
    }
    const convert8bit = (decimal) => {
      return Math.round(decimal * 255);
    }
    return {
      red: convert8bit(RGB(red)),
      green: convert8bit(RGB(gbUnitsNeeded)),
      blue: convert8bit(RGB(gbUnitsNeeded))
    };
  }
}

export default ColorGenerator;
