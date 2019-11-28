import React from 'react';
import './scss/App.scss';
import TopBar from './components/topbar';
import Body from './components/body';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TopBar></TopBar>
        <Body></Body>
      </div>
    );
  }
}

export default App;