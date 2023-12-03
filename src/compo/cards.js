import React from "react";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "./MH.png";
import pic2 from "./SG.png";
import pic3 from "./BP.png";

function cards() {
  return (
    <Carousel
      fade
      style={{
        top: "0",
        position: "relative",
        width: "100%",
      }}
    >
      <Carousel.Item>
        <img src={pic1} alt="" style={{ width: "100%" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={pic2} alt="" style={{ width: "100%" }} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={pic3} alt="" style={{ width: "100%" }} />
      </Carousel.Item>
    </Carousel>
  );
}

export default cards;
