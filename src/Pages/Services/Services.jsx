import React from "react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { Header } from "../../_components/Header";
import Layout from "../../_components/Layout";
import { servicesItems } from "./services-items";

import illustration from "../../_assets/services/illustration.svg";
import topSetting from "../../_assets/services/bottom-setting.svg";
import bottomSetting from "../../_assets/services/top-setting.svg";
import waves from "../../_assets/services/waves.svg";

import "./services.css";
import { NavLink } from "react-router-dom";
import { ServicesItem } from "./ServicesItem";
import { Wall } from "../../_components/Wall";

const Services = () => {
  useDocumentTitle();
  return (
    <>
      <Layout containerName="container--padding-none">
        <div className="services">
          <Header />
          <section className="row services--gap services__main-content-container">
            <div className="services__main-content">
              <h1 className="services__title">
                <div className="row services__title--gap">
                  <span>Web</span>
                  <img
                    className="services__waves-img"
                    src={waves}
                    alt="waves"
                  />
                </div>
                <span>Development</span>
              </h1>
              <p className="services__content-description">
                Your website is a powerful tool for your business that does it
                all. It can make a lasting impression, it can make or break your
                sales, it can help you know more
              </p>
              <NavLink className="services__header-cta">
                <span className="services__header-link-text">contact us</span>
              </NavLink>
            </div>
            <div className="services__illustration">
              <img
                className="settings top-setting"
                src={bottomSetting}
                alt="illustration"
              />
              <img
                className="settings bottom-setting"
                src={topSetting}
                alt="illustration"
              />
              <img
                className="services__illustration-image"
                src={illustration}
                alt="illustration"
              />
            </div>
          </section>
          <section className="includes">
            <h2 className="includes__title">What's included</h2>
            <div className="row includes--gap">
              {servicesItems.map((item) => (
                <ServicesItem {...item} />
              ))}
            </div>
          </section>
        </div>
      </Layout>
      <section className="our-works">
        <h2 className="our-works__title">Our works</h2>
        <div className="our-works__wall-cotnainer">
          <Wall wallAlign="horizontal" />
        </div>
        <div className="our-works__link-container">
          <NavLink className="our-works__link">learn more</NavLink>
        </div>
      </section>
    </>
  );
};

export default Services;
