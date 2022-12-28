import React from "react";
import WallItemNft from "./WallItemNft";

import "./wall.css";
import WallItemAvatar from "./WallItemAvatar";

export const Wall = ({ type = "nft", wallAlign = "vertical" }) => {
  const align = {
    vertical: ["wall-up", "wall-down"],
    horizontal: ["wall-left", "wall-right"],
  };
  const types = {
    nft: [
      new Array(12).fill(<WallItemNft className="wall__item-nft-left" />),
      new Array(12).fill(<WallItemNft className="wall__item-nft-right" />),
    ],
    avatar: [
      new Array(12).fill(<WallItemAvatar className="wall__item-avatar-left" />),
      new Array(12).fill(
        <WallItemAvatar className="wall__item-avatar-right" />
      ),
    ],
  };
  return (
    <div className={`wall ${wallAlign === 'vertical' ? "row" : "column wall-column"}`}>
      <div className={`${align[wallAlign][0]} ${wallAlign === 'vertical' ? "column" : "row"} ${type}`}>{types[type][0]}</div>
      <div className={`${align[wallAlign][1]} ${wallAlign === 'vertical' ? "column" : "row"} ${type}`}>{types[type][1]}</div>
    </div>
  );
};
