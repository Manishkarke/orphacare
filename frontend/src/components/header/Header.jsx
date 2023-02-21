import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import { navigationLinks } from "../../data/data";
import { navigationLinks } from "../../constants/constants";
import classes from "./Header.module.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      links: navigationLinks,
    };
  }
  render() {
    return (
      <header className={classes["header-section"]}>
        <h1 className={classes["company-logo"]}>OrphaCare</h1>
        <nav className={classes["navigation-section"]}>
          <ul>
            {this.state.links.map((link) => {
              return (
                <li key={link.id} className={classes["link"]}>
                  <NavLink activeclassname={classes.active} to={link.route}>
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;