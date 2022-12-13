import React from "react";
import Layout from "../../_components/Layout";
import { Header } from "../../_components/Header";
import { Information } from "../../_components/Information";
import { WallUpAndDown } from "../../_components/WallUpAndDown";

import MULTIPLE_CIRCLES from "../../_assets/about-us/multiple-circles.svg";

import "./about-us.css";

const AboutUs = () => {
  return (
    <Layout>
      <div className="row about-us">
        <div className="content">
          <Header />
          <main className="about-us__main-content">
            <div className="hero-section">
              <div className="row hero-section__title about-us__hero-section--align-center">
                <h1 className="column hero-section__title--gap">
                  <span className="title-word">About our</span>
                  <span className="title-word">company</span>
                </h1>
                <img
                  className="about-us__icon"
                  src={MULTIPLE_CIRCLES}
                  alt="circles icon"
                />
              </div>
              <div className="hero-section__description">
                <p className="hero-section__description-text about-us__description-text">
                  We are a full-service software development company. We solve
                  complex problems for businesses, startups and investors. Based
                  on years of expertise, we know how important it is to
                  personalise the experience based on the context and different
                  software and hardware environments that business. That is why
                  we provide a wide range of software development services. Our
                  goal is to meet the needs and requirements of customers with
                  the cutting edge tech.
                </p>
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

export default AboutUs;
