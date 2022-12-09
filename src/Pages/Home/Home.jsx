import React, { useEffect } from "react";
import Layout from "../../_components/Layout";
import { NavLink } from "react-router-dom";

import LOGO from "../../_assets/home-page/LOGO.svg";
import THREE_CIRCLES from "../../_assets/home-page/three-circles.svg";
import STAR from "../../_assets/home-page/star.svg";
import TWO_CIRCLES from "../../_assets/home-page/two-circles.svg";
import TWO_TRIANGLES from "../../_assets/home-page/two-triangles.svg";

import InformationItem from "./InformationItem";

import "./home.css";
import WallItem from "./WallItem";
import { ArrowButton } from "./ArrowButton";

const Home = () => {
  useEffect(() => {
    const content = document.querySelector(".content");
    const wall = document.querySelector(".wall");
    wall.style.height = content.clientHeight + "px";
  }, []);

  return (
    <Layout>
      <div className="row home-page">
        <div className="content">
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
          <main className="main-content">
            <div className="hero-section">
              <h1 className="hero-section__title column hero-section__title--gap">
                <span className="title-word title-word__icon row">
                  <span>Design</span>
                  <img src={THREE_CIRCLES} alt="ellipses" />
                </span>
                <span className="title-word">Development</span>
                <span className="title-word">Maintenance</span>
              </h1>
              <div className="hero-section__description row">
                <p className="hero-section__description-text">
                  Leverage our 6+ years experience to create solid software for
                  your business
                </p>
                <NavLink
                  to="/about-us"
                  className="hero-section__description-link"
                >
                  <ArrowButton />
                </NavLink>
              </div>
            </div>
            <div className="main-content__information row main-content__information--gap">
              <InformationItem
                number="6+"
                text="years of experience"
                image={STAR}
              />
              <InformationItem
                number="12"
                text="dev categories"
                image={TWO_CIRCLES}
              />
              <InformationItem
                number="23"
                text="masters in team"
                image={TWO_TRIANGLES}
              />
            </div>
          </main>
        </div>
        <div className="wall row">
          <div className="wall-up column">
            {new Array(12).fill(<WallItem className="wall__item-left" />)}
          </div>
          <div className="wall-down column">
            {new Array(12).fill(<WallItem className="wall__item-right" />)}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
