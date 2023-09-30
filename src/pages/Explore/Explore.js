import { Container } from "@mui/material";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import { IMAGES } from "../../Styles/constants";
import ExploreVideo from "../../Components/ExploreVideo/ExploreVideo";

const Explore = () => {
  return (
    <>
      <BannerContainer
        URL={IMAGES.EXPLORE_BANNER}
        height="50vh"
        position="center"
      >
        <Navbar />
      </BannerContainer>
      <ExploreVideo />
    </>
  );
};

export default Explore;
