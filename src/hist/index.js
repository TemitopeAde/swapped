import React from "react";
import RangeSlider from "./RangeSlider";

const prices = [1600,1400,1200,1000,800,600,400,300,100,20]
// const prices = [];

// for (let i = 20; i < 1200; i += 120) {
//   console.log(i);
//   prices.push(Math.floor(Math.random() * 1600) + 1);
// }

const BarApp = () => {
  return (
    <div style={{width: '100%'}}>
      <RangeSlider data={prices} />
    </div>
  );
};

export default BarApp;
