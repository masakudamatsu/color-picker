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
          <div className="swash-layout">
            <section className="swash-container">
              <Swash luminance={this.state.luminance}
                     redLuminance={0.1} />
              <Swash luminance={this.state.luminance}
                     redLuminance={0.2} />
              <Swash luminance={this.state.luminance}
                     redLuminance={0.3} />
              <Swash luminance={this.state.luminance}
                     redLuminance={0.4} />
              <Swash luminance={this.state.luminance}
                     redLuminance={0.5} />
              <Swash luminance={this.state.luminance}
                     redLuminance={0.6} />
              <Swash luminance={this.state.luminance}
                     redLuminance={0.7} />
              <Swash luminance={this.state.luminance}
                     redLuminance={0.8} />
              <Swash luminance={this.state.luminance}
                     redLuminance={0.9} />
            </section>
            <section className="swash-container">
              <Swash luminance={this.state.luminance}
                     yellowLuminance={0.1} />
              <Swash luminance={this.state.luminance}
                     yellowLuminance={0.2} />
              <Swash luminance={this.state.luminance}
                     yellowLuminance={0.3} />
              <Swash luminance={this.state.luminance}
                     yellowLuminance={0.4} />
              <Swash luminance={this.state.luminance}
                     yellowLuminance={0.5} />
              <Swash luminance={this.state.luminance}
                     yellowLuminance={0.6} />
              <Swash luminance={this.state.luminance}
                     yellowLuminance={0.7} />
              <Swash luminance={this.state.luminance}
                     yellowLuminance={0.8} />
              <Swash luminance={this.state.luminance}
                     yellowLuminance={0.9} />
            </section>
            <section className="swash-container">
              <Swash luminance={this.state.luminance}
                     greenLuminance={0.1} />
              <Swash luminance={this.state.luminance}
                     greenLuminance={0.2} />
              <Swash luminance={this.state.luminance}
                     greenLuminance={0.3} />
              <Swash luminance={this.state.luminance}
                     greenLuminance={0.4} />
              <Swash luminance={this.state.luminance}
                     greenLuminance={0.5} />
              <Swash luminance={this.state.luminance}
                     greenLuminance={0.6} />
              <Swash luminance={this.state.luminance}
                     greenLuminance={0.7} />
              <Swash luminance={this.state.luminance}
                     greenLuminance={0.8} />
              <Swash luminance={this.state.luminance}
                     greenLuminance={0.9} />
            </section>
            <section className="swash-container">
              <Swash luminance={this.state.luminance}
                     cyanLuminance={0.1} />
              <Swash luminance={this.state.luminance}
                     cyanLuminance={0.2} />
              <Swash luminance={this.state.luminance}
                     cyanLuminance={0.3} />
              <Swash luminance={this.state.luminance}
                     cyanLuminance={0.4} />
              <Swash luminance={this.state.luminance}
                     cyanLuminance={0.5} />
              <Swash luminance={this.state.luminance}
                     cyanLuminance={0.6} />
              <Swash luminance={this.state.luminance}
                     cyanLuminance={0.7} />
              <Swash luminance={this.state.luminance}
                     cyanLuminance={0.8} />
              <Swash luminance={this.state.luminance}
                     cyanLuminance={0.9} />
            </section>
            <section className="swash-container">
              <Swash luminance={this.state.luminance}
                     blueLuminance={0.1} />
              <Swash luminance={this.state.luminance}
                     blueLuminance={0.2} />
              <Swash luminance={this.state.luminance}
                     blueLuminance={0.3} />
              <Swash luminance={this.state.luminance}
                     blueLuminance={0.4} />
              <Swash luminance={this.state.luminance}
                     blueLuminance={0.5} />
              <Swash luminance={this.state.luminance}
                     blueLuminance={0.6} />
              <Swash luminance={this.state.luminance}
                     blueLuminance={0.7} />
              <Swash luminance={this.state.luminance}
                     blueLuminance={0.8} />
              <Swash luminance={this.state.luminance}
                     blueLuminance={0.9} />
            </section>
            <section className="swash-container">
              <Swash luminance={this.state.luminance}
                     purpleLuminance={0.1} />
              <Swash luminance={this.state.luminance}
                     purpleLuminance={0.2} />
              <Swash luminance={this.state.luminance}
                     purpleLuminance={0.3} />
              <Swash luminance={this.state.luminance}
                     purpleLuminance={0.4} />
              <Swash luminance={this.state.luminance}
                     purpleLuminance={0.5} />
              <Swash luminance={this.state.luminance}
                     purpleLuminance={0.6} />
              <Swash luminance={this.state.luminance}
                     purpleLuminance={0.7} />
              <Swash luminance={this.state.luminance}
                     purpleLuminance={0.8} />
              <Swash luminance={this.state.luminance}
                     purpleLuminance={0.9} />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
