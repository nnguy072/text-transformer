import React from 'react';
import { Link } from '@reach/router';

type NavItemProps = {
  name: string,
  path: string
}

// This component is pretty useless, I just want wanted to practice passing down props
const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => <div><Link to={props.path}>{props.name}</Link></div>;

export default NavItem;