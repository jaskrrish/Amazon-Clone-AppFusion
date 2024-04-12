import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Carasouel = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[100px]">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            className="h-[500px]"
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/BAU/Hero/D91435399_WLA-BAU-Unrec-Hero_DesktopTallHero_3000x1200-bau._CB582195367_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[500px]"
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/Apr/Shoes/Unrec/No_bank/Cat3/299_PC_3000._CB560430359_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-[500px]"
            loading="lazy"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/ATFGW/GW_Storage-box_3000x1200_PC._CB561623684_.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Carasouel;
