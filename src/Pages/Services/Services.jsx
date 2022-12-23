import React from "react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { Header } from "../../_components/Header";
import Layout from "../../_components/Layout";

import illustration from "../../_assets/services/illustration.svg";
import topSetting from "../../_assets/services/bottom-setting.svg";
import bottomSetting from "../../_assets/services/top-setting.svg";
import waves from "../../_assets/services/waves.svg";

import "./services.css";
import { NavLink } from "react-router-dom";

const Services = () => {
  useDocumentTitle();
  return (
    <Layout>
      <div className="services">
        <Header />
        <div className="row services--gap">
          <div className="services__main-content">
            <h1 className="services__title">
              <div className="row services__title--gap">
                <span>Web</span>
                <img className="services__waves-img" src={waves} alt="waves" />
              </div>
              <span>Development</span>
            </h1>
            <p className="services__content-description">
              Your website is a powerful tool for your business that does it
              all. It can make a lasting impression, it can make or break your
              sales, it can help you know more
            </p>
            <div className="services__header-cta">
              <NavLink className="services__header-link">contatc-us</NavLink>
            </div>
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
            <img src={illustration} alt="illustration" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
