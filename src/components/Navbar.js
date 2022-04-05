import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  state={
    isOpen:false
  }

  render() {
    return (
      <nav className="navbar"></nav>
    )
  }
}
