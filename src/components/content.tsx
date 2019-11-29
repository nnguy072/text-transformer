import React from 'react';
import { Router } from '@reach/router';
import MyComp from './myComp';
import MyCompTwo from './myCompTwo';
import NotFound from './navigation/notFound';

export default class Content extends React.Component {
  render(): JSX.Element {
    return (
      <Router>
        <MyComp path="/" />
        <MyCompTwo path="/two" />
        <NotFound default />
      </Router>
    );
  }
}