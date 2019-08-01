const ColorGenerator = {
  // See the luminance formula at https://www.w3.org/TR/WCAG20-TECHS/G17.html
  coefficient: {
    red: 0.2126,
    green: 0.7152,
    blue: 0.0722
  },
  RGB(color) {
    return 1.055 * Math.pow(color, (1/2.4)) - 0.055;
  },
  convert8bit(decimal) {
    return Math.round(decimal * 255);
  },
  getRedShade(luminance, red) {
    const gbLuminance = luminance - this.coefficient.red * red;
    if (gbLuminance < 0) {
      return null;
    }
    const gbUnitsNeeded = gbLuminance / (this.coefficient.green + this.coefficient.blue);
    if (gbUnitsNeeded > red ) {
      return null;
    }
    return {
      red: this.convert8bit(this.RGB(red)),
      green: this.convert8bit(this.RGB(gbUnitsNeeded)),
      blue: this.convert8bit(this.RGB(gbUnitsNeeded))
    };
  },
  getGreenShade(luminance, green) {
    const rbLuminance = luminance - this.coefficient.green * green;
    if (rbLuminance < 0) {
      return null;
    }
    const rbUnitsNeeded = rbLuminance / (this.coefficient.red + this.coefficient.blue);
    if (rbUnitsNeeded > green ) {
      return null;
    }
    return {
      red: this.convert8bit(this.RGB(rbUnitsNeeded)),
      green: this.convert8bit(this.RGB(green)),
      blue: this.convert8bit(this.RGB(rbUnitsNeeded))
    };
  },
  getBlueShade(luminance, blue) {
    const rgLuminance = luminance - this.coefficient.blue * blue;
    if (rgLuminance < 0) {
      return null;
    }
    const rgUnitsNeeded = rgLuminance / (this.coefficient.red + this.coefficient.green);
    if (rgUnitsNeeded > blue ) {
      return null;
    }
    return {
      red: this.convert8bit(this.RGB(rgUnitsNeeded)),
      green: this.convert8bit(this.RGB(rgUnitsNeeded)),
      blue: this.convert8bit(this.RGB(blue))
    };
  },
  getYellowShade(luminance, yellow) {
    const bLuminance = luminance - (this.coefficient.red + this.coefficient.green) * yellow;
    if (bLuminance < 0) {
      return null;
    }
    const bUnitsNeeded = bLuminance / this.coefficient.blue;
    if (bUnitsNeeded > yellow ) {
      return null;
    }
    return {
      red: this.convert8bit(this.RGB(yellow)),
      green: this.convert8bit(this.RGB(yellow)),
      blue: this.convert8bit(this.RGB(bUnitsNeeded))
    };
  },
  getCyanShade(luminance, cyan) {
    const rLuminance = luminance - (this.coefficient.green + this.coefficient.blue) * cyan;
    if (rLuminance < 0) {
      return null;
    }
    const rUnitsNeeded = rLuminance / this.coefficient.red;
    if (rUnitsNeeded > cyan ) {
      return null;
    }
    return {
      red: this.convert8bit(this.RGB(rUnitsNeeded)),
      green: this.convert8bit(this.RGB(cyan)),
      blue: this.convert8bit(this.RGB(cyan))
    };
  },
  getPurpleShade(luminance, purple) {
    const gLuminance = luminance - (this.coefficient.red + this.coefficient.blue) * purple;
    if (gLuminance < 0) {
      return null;
    }
    const gUnitsNeeded = gLuminance / this.coefficient.green;
    if (gUnitsNeeded > purple ) {
      return null;
    }
    return {
      red: this.convert8bit(this.RGB(purple)),
      green: this.convert8bit(this.RGB(gUnitsNeeded)),
      blue: this.convert8bit(this.RGB(purple))
    };
  },
}

export default ColorGenerator;
