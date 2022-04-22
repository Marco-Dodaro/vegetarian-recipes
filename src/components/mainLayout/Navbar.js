import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import logo from '../../images/logo.jpg'

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar">
        <NavLink to={"/"} className="noUnderline">
          <div className="logo">
            <img src={logo} className="logoImg" />
            <h2>Vegetarian&nbsp;Recipes <br/> 4 All</h2>
          </div>
        </NavLink>
      </nav>
    )
  }
}
