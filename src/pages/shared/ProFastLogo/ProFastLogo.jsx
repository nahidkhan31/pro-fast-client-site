import React from "react";
import Logo from "../../../assets/logo.png";

const ProFastLogo = () => {
  return (
    <div className="flex items-end">
      <img className="mb-2" src={Logo} alt="logo" />
      <p className="text-3xl -ml-2 font-urbanist font-bold">
        Pro<span className="text-green-600">Fast</span>
      </p>
    </div>
  );
};

export default ProFastLogo;
