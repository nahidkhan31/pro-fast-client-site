import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImage1 from "../../assets/banner/banner1.png";
import bannerImage2 from "../../assets/banner/banner2.png";
import bannerImage3 from "../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel className="mt-4" autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={bannerImage1} />
        <p className="legend">Banner-1</p>
      </div>
      <div>
        <img src={bannerImage2} />
        <p className="legend">Banner-2</p>
      </div>
      <div>
        <img src={bannerImage3} />
        <p className="legend">Banner-3</p>
      </div>
    </Carousel>
  );
};

export default Banner;
