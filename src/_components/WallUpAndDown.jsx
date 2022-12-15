import React from "react";
import WallItemNft from "./WallItemNft";

import "./wall.css";
import WallItemAvatar from "./WallItemAvatar";

export const WallUpAndDown = ({ type = "nft" }) => {
  const types = {
    nft: [
      new Array(12).fill(<WallItemNft className="wall__item-nft-left" />),
      new Array(12).fill(<WallItemNft className="wall__item-nft-right" />),
    ],
    avatar: [
      new Array(12).fill(<WallItemAvatar className="wall__item-avatar-left" />),
      new Array(12).fill(<WallItemAvatar className="wall__item-avatar-right" />),
    ],
  };
  return (
    <div className={`wall row`}>
      <div className={`wall-up column ${type}`}>{types[type][0]}</div>
      <div className={`wall-down column ${type}`}>{types[type][1]}</div>
    </div>
  );
};
