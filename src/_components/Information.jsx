import React from "react";

import STAR from "../_assets/home-page/star.svg";
import TWO_CIRCLES from "../_assets/home-page/two-circles.svg";
import TWO_TRIANGLES from "../_assets/home-page/two-triangles.svg";
import InformationItem from "./InformationItem";

export const Information = () => {
  return (
    <div className="main-content__information row main-content__information--gap">
      <InformationItem number="6+" text="years of experience" image={STAR} />
      <InformationItem number="12" text="dev categories" image={TWO_CIRCLES} />
      <InformationItem number="23" text="masters in team" image={TWO_TRIANGLES} />
    </div>
  );
};
