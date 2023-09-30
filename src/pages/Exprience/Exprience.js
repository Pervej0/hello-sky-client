import React from "react";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import { IMAGES } from "../../Styles/constants";
import Navbar from "../../Components/Navbar/Navbar";
import Travelling from "../../Components/Travelling/Travelling";

const Exprience = () => {
  return (
    <>
      <BannerContainer
        URL={IMAGES.EXPRIENCE_BANNER}
        height="50vh"
        position="center"
      >
        <Navbar />
      </BannerContainer>
      <Travelling showDesc={true} />
    </>
  );
};

export default Exprience;
