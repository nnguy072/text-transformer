import React from 'react';
import './scss/App.scss';
import Container from 'react-bootstrap/Container';
import Content from './components/content';
import TopNav from './components/navigation/topbar';

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div className="app">
        <TopNav />
        <Container fluid>
          <Content />
        </Container>
      </div>
    );
  }
}

export default App;