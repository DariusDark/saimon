import React from "react";
import WallItem from "./WallItem";

import "./wall.css";

export const WallUpAndDown = () => {

  return (
    <div className={`wall row`}>
      <div className="wall-up column">
        {new Array(12).fill(<WallItem className="wall__item-left" />)}
      </div>
      <div className="wall-down column">
        {new Array(12).fill(<WallItem className="wall__item-right" />)}
      </div>
    </div>
  );
};
