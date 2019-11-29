import React from 'react';
import { RouteComponentProps } from '@reach/router';

export default class MyComp extends React.Component<RouteComponentProps> {
  render(): JSX.Element {
    return (
      <div>My Comp</div>
    );
  }
}