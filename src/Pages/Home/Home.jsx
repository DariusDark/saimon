import React, { useEffect } from "react";
import Layout from "../../_components/Layout";
import { Header } from "../../_components/Header";
import { Information } from "../../_components/Information";
import { NavLink } from "react-router-dom";

import THREE_CIRCLES from "../../_assets/home-page/three-circles.svg";

import "./home.css";
import { ArrowButton } from "./ArrowButton";
import { WallUpAndDown } from "../../_components/WallUpAndDown";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Saimon | Web Agency");
  useEffect(() => {
    const content = document.querySelector(".content");
    const wall = document.querySelector(".wall");
    wall.style.minHeight = content.clientHeight + "px";
  }, []);

  return (
    <Layout>
      <div className="row home-page">
        <div className="content">
          <Header />
          <main className="content__main">
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
            <Information />
          </main>
        </div>
        <WallUpAndDown />
      </div>
    </Layout>
  );
};

export default Home;
