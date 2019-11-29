import React from 'react';
import { RouteComponentProps } from '@reach/router';

export default class NotFound extends React.PureComponent<RouteComponentProps> {
  render(): JSX.Element {
    return (
      <div>Nothing here</div>
    );
  }
}