import React from 'react';
import ColorGenerator from '../util/ColorGenerator.js';

class Swash extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const rgbValues = ColorGenerator.generateColor(this.props.luminance, this.props.redLuminance);
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
