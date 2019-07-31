import React from 'react';
import './App.css';
import LuminanceSetter from './components/LuminanceSetter.js';
class App extends React.Component {
  render() {
  return (
    <div className="App">
        <main>
          <LuminanceSetter />
        </main>
    </div>
  );
}
}

export default App;
