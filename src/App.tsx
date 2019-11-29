import React from 'react';
import './scss/App.scss';
import SideNav from './components/navigation/sideNav';
import Container from 'react-bootstrap/Container';
import Content from './components/content';

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div className="app">
        <SideNav />
        <Container fluid>
          <Content></Content>
        </Container>
      </div>
    );
  }
}

export default App;