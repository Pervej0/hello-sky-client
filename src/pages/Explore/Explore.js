import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import { IMAGES } from "../../Styles/constants";
import ExploreVideo from "../../Components/ExploreVideo/ExploreVideo";
import ExplorePosts from "../../Components/ExplorePosts/ExplorePosts";

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
      <ExplorePosts showSlide={true} />
    </>
  );
};

export default Explore;
