import React from "react";
import RangeSlider from "../hist/RangeSlider";

const Hist = () => {
  const prices = [];
  for (let i = 0; i < 500; i++) {
    prices.push(Math.floor(Math.random() * 80) + 1);
  }
  return (
    <div>
      <RangeSlider data={prices} />
    </div>
  );
};

export default Hist;
