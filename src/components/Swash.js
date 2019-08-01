import React from 'react';
import ColorGenerator from '../util/ColorGenerator.js';

class Swash extends React.Component {
  render() {
    let rgbValues;
    if (this.props.redLuminance) {
      rgbValues = ColorGenerator.getRedShade(this.props.luminance, this.props.redLuminance);
    } else if (this.props.greenLuminance) {
      rgbValues = ColorGenerator.getGreenShade(this.props.luminance, this.props.greenLuminance);
    } else if (this.props.blueLuminance) {
      rgbValues = ColorGenerator.getBlueShade(this.props.luminance, this.props.blueLuminance);
    } else if (this.props.yellowLuminance) {
      rgbValues = ColorGenerator.getYellowShade(this.props.luminance, this.props.yellowLuminance);
    } else if (this.props.cyanLuminance) {
      rgbValues = ColorGenerator.getCyanShade(this.props.luminance, this.props.cyanLuminance);
    } else if (this.props.purpleLuminance) {
      rgbValues = ColorGenerator.getPurpleShade(this.props.luminance, this.props.purpleLuminance);
    }
    let colorCode;
    let color = {};
    if (rgbValues) {
      colorCode = `rgb(${rgbValues.red}, ${rgbValues.green}, ${rgbValues.blue})`;
      color = {
        backgroundColor: `${colorCode}`
      };
    } else {
      color = {
        backgroundColor: 'transparent'
      }
    }
    return (
      <section className="swash"
      style={color}>
        <h3 className="rgb-value">{colorCode}</h3>
      </section>
    );
  }
}

export default Swash;
