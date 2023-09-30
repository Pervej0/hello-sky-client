import { Container, Grid } from "@mui/material";
import React from "react";
import ContentTitle from "../ContentTitle/ContentTitle";
import LowFareCard from "./LowFareCard/LowFareCard";
import { IMAGES } from "../../Styles/constants";
import Slider from "react-slick";

const LowFareTrip = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <ContentTitle value="Low Fare Deals" color="black" />

      <Slider {...settings}>
        <LowFareCard
          url={IMAGES.FARE_DEAL_DELHI}
          name="New Delhi"
          cost="299"
          decimalCost=".99"
          flightType="Round Trip"
          duration="NOV 01 - DEC 01"
          direction="DAC-DEL"
          lowestCost="330"
          highestCost="380"
        />
        <LowFareCard
          url={IMAGES.FARE_DEAL_DENPASARBALI}
          name="Denpasar Bali"
          cost="359"
          decimalCost=".99"
          flightType="Round Trip"
          duration="NOV 01 - DEC 01"
          direction="DAC-DPS"
          lowestCost="460"
          highestCost="680"
        />
        <LowFareCard
          url={IMAGES.FARE_DEAL_MANILA}
          name="Manila"
          cost="399"
          decimalCost=".99"
          flightType="Round Trip"
          duration="NOV 01 - DEC 01"
          direction="DAC-MNL"
          lowestCost="430"
          highestCost="580"
        />
        <LowFareCard
          url={IMAGES.FARE_DEAL_MANILA}
          name="Manila"
          cost="399"
          decimalCost=".99"
          flightType="Round Trip"
          duration="NOV 01 - DEC 01"
          direction="DAC-MNL"
          lowestCost="430"
          highestCost="580"
        />
      </Slider>
    </Container>
  );
};

export default LowFareTrip;
