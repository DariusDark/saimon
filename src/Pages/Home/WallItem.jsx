import React from "react";

import "./wallItem.css";

import nft from "../../_assets/home-page/nft-tiger.png";

const WallItem = ({ className = "" }) => {
  return (
    <div className={`wall__item ${className} column`}>
      <p className="wall_item-text">Creating a site for sale NTF</p>
      <img src={nft} alt="nft for sale" />
    </div>
  );
};

export default WallItem;
