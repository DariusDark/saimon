import React from "react";
import { NavLink } from "react-router-dom";

import LOGO from "../_assets/home-page/LOGO.svg";

import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container row">
        <div className="logo">
          <div className="logo__container">
            <NavLink to="/home">
              <img src={LOGO} alt="Saimon Logo" className="logo__image" />
            </NavLink>
          </div>
        </div>
        <nav className="navigation">
          <ul className="navgation__list row">
            <li className="list__item">
              <NavLink className="list__item-link" to="/">
                home
              </NavLink>
            </li>
            <li className="list__item">
              <NavLink className="list__item-link" to="/about-us">
                about us
              </NavLink>
            </li>
            <li className="list__item">
              <NavLink className="list__item-link" to="/services">
                services
              </NavLink>
            </li>
            <li className="list__item">
              <NavLink className="list__item-link" to="/contact-us">
                contact us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
