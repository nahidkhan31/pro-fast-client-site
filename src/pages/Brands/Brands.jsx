import React from "react";
import Logo1 from "../../assets/brands/amazon.png";
import Logo3 from "../../assets/brands/casio.png";
import Logo4 from "../../assets/brands/moonstar.png";

import Logo6 from "../../assets/brands/randstad.png";
import Logo7 from "../../assets/brands/start-people 1.png";
import Logo8 from "../../assets/brands/start.png";

const Brands = () => {
  return (
    <div className="w-11/12 mx-aut ">
      <div className="mb-9">
        <h1 className="text-center text-2xl font-bold mb-3">
          We've helped thousands of sales teams
        </h1>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 mb-4 w-11/12 mx-auto">
        <img className="w-30" src={Logo1} alt="" />
        <img className="w-30" src={Logo3} alt="" />
        <img className="w-30" src={Logo4} alt="" />
        <img className="w-30" src={Logo6} alt="" />
        <img className="w-30" src={Logo7} alt="" />
        <img className="w-30" src={Logo8} alt="" />
      </div>
    </div>
  );
};

export default Brands;
