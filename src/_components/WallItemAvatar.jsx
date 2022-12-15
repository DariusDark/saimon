import React from "react";

import "./wallItemAvatar.css";

const WallItemAvatar = ({ className = "" }) => {
  return (
    <div className={`wall__item-avatar ${className} column`}>
      <div className="wall__item-background-avatar"></div>
      <p className="wall__item-title-avatar">Alex Morozov</p>
      <p className="wall__item-description-avatar">ux/ui design</p>
    </div>
  );
};

export default WallItemAvatar;
