import React, { Component } from "react";
import { navigationLinks } from "../../data/data";
import classes from "./Header.module.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      links: navigationLinks,
      activeObject: navigationLinks[0]
    };
  }
  classNameHandler = (index) => {
    if (this.state.links[index] === this.state.activeObject) {
      console.log("Active");
      return `${classes["link"]} ${classes["active-link"]}`;
    } else {
      console.log("Inactive");
      return `${classes["link"]}`;
    }
  };
  handleCLick = (index) => {
    this.setState({ activeObject: this.state.links[index] });

    // console.log(linkObject);
  };
  render() {

    return (
      <header className={classes["header-section"]}>
        <h1 className={classes["company-logo"]}>OrphaCare</h1>
        <nav className={classes["navigation-section"]}>
          <ul>
            {this.state.links.map((link, index) => {
              return (
                <li
                  key={link.id}
                  className={this.classNameHandler(index)}
                >
                  <a
                    href={link.route}
                    onClick={(event) => {
                      event.preventDefault();
                      this.handleCLick(index);
                    }}
                  >
                    {link.name}
                  </a>
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