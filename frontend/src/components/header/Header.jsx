import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navigationLinks } from "../../constants/constants";
import classes from "./Header.module.css";
import { getAccessTokenFromLocalStorage } from "../../utils/localStorage";

const Header = () => {
  const [links, setLinks] = useState(navigationLinks);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const accessToken = getAccessTokenFromLocalStorage();
  useEffect(() => {
    if (accessToken) {
      // setIsLoggedIn(true);
    }
  }, []);
  return (
    <header className={classes["header-section"]}>
      <h1 className={classes["company-logo"]}>OrphaCare</h1>
      <nav className={classes["navigation-section"]}>
        <ul>
          {links.map(({ name, route, id }) => {
            return (
              <li key={id} className={`${name === "Sign In" ? classes["sign-in"] : ""}`}>
                <NavLink to={route}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
