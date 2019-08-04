// GreyShade component
// Start with replacing "GreyShade" with the Component's name

import React from 'react';

class GreyShade extends React.Component {
  render() {
    const colorCode = `rgb(${this.props.rgb}, ${this.props.rgb}, ${this.props.rgb})`;
    const color = {
      backgroundColor: `${colorCode}`
    };
    return (
      <div className="grey"
           style={color}>
      </div>
    );
  }
}

export default GreyShade;
