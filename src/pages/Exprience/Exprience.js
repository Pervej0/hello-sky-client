import React from "react";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import { IMAGES } from "../../Styles/constants";
import Navbar from "../../Components/Navbar/Navbar";

const Exprience = () => {
  return (
    <BannerContainer
      URL={IMAGES.EXPRIENCE_BANNER}
      height="50vh"
      position="center"
    >
      <Navbar />
    </BannerContainer>
  );
};

export default Exprience;
