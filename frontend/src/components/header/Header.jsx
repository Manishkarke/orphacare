import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navigationLinks } from "../../constants/constants";
import classes from "./Header.module.css";
import {
  getAccessTokenFromLocalStorage,
  removeAccessTokenFromLocalStorage,
} from "../../utils/localStorage";

const Header = () => {
  const [links] = useState(navigationLinks);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const accessToken = getAccessTokenFromLocalStorage();

  useEffect(() => {
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, [accessToken]);

  useEffect(() => {
    if (isLoggedIn) {
      setUsername("manish");
    } else {
      setUsername("");
    }
  }, [isLoggedIn]);

  return (
    <header className={classes["header-section"]}>
      <h1 className={classes["company-logo"]}>OrphaCare</h1>
      <nav className={classes["navigation-section"]}>
        <ul>
          {links.map(({ name, route, id }) => {
            return (
              <li key={id} className={`${name === "Sign In" ? classes["sign-in"] : ""}`}>
                {isLoggedIn && name === "Sign In" ? (
                  <NavLink
                    to={`logOut`}
                    onClick={() => {
                      removeAccessTokenFromLocalStorage();
                    }}
                  >
                    {username}
                  </NavLink>
                ) : (
                  <NavLink to={route}>{name}</NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
