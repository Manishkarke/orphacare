import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navigationLinks } from "../../constants/constants";
import classes from "./Header.module.css";
import {
  getAccessTokenFromLocalStorage,
  removeAccessTokenFromLocalStorage,
} from "../../utils/localStorage";
import OverlayModel from "../../ui/OverlayModel";
import LogOut from "../../ui/LogOut";

const Header = () => {
  const [links] = useState(navigationLinks);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { accessToken, userName } = getAccessTokenFromLocalStorage();

  useEffect(() => {
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, [accessToken]);

  useEffect(() => {
    if (isLoggedIn) {
      setUsername(userName);
    } else {
      setUsername("");
    }
  }, [isLoggedIn, userName]);

  return (
    <header className={classes["header-section"]}>
      <h1 className={classes["company-logo"]}>OrphaCare</h1>
      <nav className={classes["navigation-section"]}>
        <ul>
          {links.map(({ name, route, id }) => {
            return (
              <li
                key={id}
                className={`${name === "Sign In" ? classes["sign-in"] : ""}`}
              >
                {isLoggedIn && name === "Sign In" ? (
                  <NavLink
                    onClick={() => {
                      setShowModal(true);
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
        {showModal && (
          <OverlayModel
            children={<LogOut closeModal={setShowModal} />}
            closeModal={setShowModal}
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
