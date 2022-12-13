import React from "react";

import "./informationItem.css";

const InformationItem = ({
  number = "6+",
  text = "years experience",
  image,
}) => {
  return (
    <div className="main-content__information-item">
      <div className="information-item__icon-container">
        <img className="information-item__icon" src={image} alt="" />
      </div>
      <div className="information-item__text-container">
        <span className="information-item__number">{number}</span>
        <p className="information-item__text">{text}</p>
      </div>
    </div>
  );
};

export default InformationItem;
