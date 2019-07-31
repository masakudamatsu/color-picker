import React from 'react';
import './App.css';
import LuminanceSetter from './components/LuminanceSetter.js';
import Swash from './components/Swash.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      luminance: 0.4
    };
    this.setLuminance = this.setLuminance.bind(this);
  }
  setLuminance(luminanceInPercent) {
    const luminanceInDecimal = luminanceInPercent/100;
    this.setState({
      luminance: luminanceInDecimal
    });
  }
  render() {
    return (
      <div className="App">
        <main>
          <LuminanceSetter setLuminance={this.setLuminance} />
          <Swash luminance={this.state.luminance}
                 redLuminance={0.9} />
        </main>
      </div>
    );
  }
}

export default App;
