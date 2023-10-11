import React from "react";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import { IMAGES } from "../../Styles/constants";
import Navbar from "../../Components/Navbar/Navbar";
import Travelling from "../../Components/Travelling/Travelling";

const Experience = () => {
  return (
    <>
      <BannerContainer
        URL={IMAGES.experience_BANNER}
        height="50vh"
        position="center"
      >
        <Navbar />
      </BannerContainer>
      <Travelling showDesc={true} />
    </>
  );
};

export default Experience;
