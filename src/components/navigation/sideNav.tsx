import React from 'react';
import NavItem from './navItem';

export default class SideNav extends React.PureComponent {
  render(): JSX.Element {
    return (
      <div className="side-nav">
        <NavItem name="Home" path="/" />
        <NavItem name="Two" path="/two" />
        <NavItem name="Test" path="/test" />
      </div>
    );
  }
}