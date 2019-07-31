import React from 'react';

class LuminanceSetter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      luminance: '',
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleChange(event) {
    if (event.target.value.match(/\D+/g)) {
      this.setState({
        error: true
      });
    } else {
      this.setState({
        luminance: event.target.value,
        error: false
      });
    }
  }
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.setLuminance(this.state.luminance);
    } else {
      return;
    }
  }
  render() {
    let errorMessage;
    if (this.state.error) {
      errorMessage = (
        <p className="error-message">
          Please enter a number between 0 and 100 (exclusive).
        </p>
      );
    }
    return (
      <section className="ciu-search">
        <p>
          Luminance:
          <input type="text"
                 className="ciu-search__input"
                 name="feat_search"
                 autoComplete="off"
                 autoFocus
                 value={this.state.luminance}
                 onChange={this.handleChange}
                 onKeyPress={this.handleKeyPress}/>
          % of pure white
        </p>
        {errorMessage}
      </section>
    );
  }
}

export default LuminanceSetter;
