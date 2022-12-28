import React from "react";

import "./services-item.css";

export const ServicesItem = ({ img, label, description }) => {
  return (
    <div className="services__item-body">
      <div className="services__item-icon-container">
        <img className="services__item-icon-img" src={img} alt="service-icon" />
      </div>
      <h6 className="services__item-label">{label}</h6>
      <p className="services__item-description">{description}</p>
    </div>
  );
};
