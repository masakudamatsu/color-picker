// LuminanceSlideSetter component
// Start with replacing "LuminanceSlideSetter" with the Component's name

import React from 'react';
import GreyShade from './GreyShade.js';
class LuminanceSlideSetter extends React.Component {
  render() {
    let values =[];
    for (let counter = 1; counter < 255; counter++) {
      values.push(counter);
    }
    return (
      <div>
        <div className="grey-container">
          {values.map(value => {
            return (
              <GreyShade rgb={value} />
            );
          })}
        </div>
        <input type="range"
               className="slider"
               max="254"
               min="1"
               step="1" />
      </div>
    );
  }
}

export default LuminanceSlideSetter;
