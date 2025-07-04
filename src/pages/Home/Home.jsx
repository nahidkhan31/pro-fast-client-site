import React from "react";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import Services from "../Services/Services";
import Brands from "../Brands/Brands";
import Benefits from "../Benefits/Benefits";
import BeMerchant from "../BeMerchant/BeMerchant";
import Customer from "../Customer/Customer";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <Banner />
      <Banner2 />
      <Services />
      <Brands />
      <Benefits />
      <BeMerchant />
      <Customer />
      <FAQ />
    </div>
  );
};

export default Home;
