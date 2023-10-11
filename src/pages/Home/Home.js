import React from "react";
import { IMAGES } from "../../Styles/constants";
import SearchTab from "../../Components/Searchbar/SearchTab";
import Navbar from "../../Components/Navbar/Navbar";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import ExplorePosts from "../../Components/ExplorePosts/ExplorePosts";
import Subscription from "../../Components/Subscription/Subscription";
import LowFareTrip from "../../Components/LowFareTrips/LowFareTrips";
import Travelling from "../../Components/Travelling/Travelling";

const Home = () => {
  return (
    <>
      <BannerContainer
        URL={IMAGES.HOME_BANNER}
        height="100vh"
        position="center"
        maxWidth="true"
      >
        <Navbar />
        <SearchTab />
      </BannerContainer>
      <LowFareTrip />
      <Travelling showDesc={false} />
      <ExplorePosts showSlide={false} />
      <Subscription />
    </>
  );
};

export default Home;

// const CustomizeBanner = styled(BannerContainer)`
//   /* background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
//     url(${IMAGES.HOME_BANNER}) no-repeat; */
//   background-size: cover;
//   background-position: center;
//   width: 100%;
//   height: 100vh;
//   margin: 0;
// `;
