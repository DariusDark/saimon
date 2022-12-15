import React from "react";

import "./wallItemNft.css";

import nft from "../_assets/home-page/nft-tiger.png";

const WallItemNft = ({ className = "" }) => {
  return (
    <div className={`wall__item-nft ${className} column`}>
      <p className="wall__item-text-nft">Creating a site for sale NTF</p>
      <img className="wall__item-image-nft" src={nft} alt="nft for sale" />
    </div>
  );
};

export default WallItemNft;
