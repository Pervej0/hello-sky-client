import React, { useEffect, useState } from "react";
import SearchTab from "../../Searchbar/SearchTab";
import Navbar from "../../Navbar/Navbar";
import BannerContainer from "../../BannerContainer/BannerContainer";
import { COLORS, IMAGES } from "../../../Styles/constants";
import BookAFlight from "../../Searchbar/TabPanels/BookAFlight";
import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

const TravelBook = () => {
  const [travelItem, setTravelItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { listId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/travels_destination/${listId}`)
      .then((res) => res.json())
      .then((data) => {
        setTravelItem(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Container
        maxWidth="true"
        sx={{
          backgroundColor: COLORS.BLACK1,
          padding: 0,
          margin: 0,
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Container>
          {!isLoading && <BookAFlight arrival={travelItem?.destination} />}
        </Container>
      </Container>
    </>
  );
};

export default TravelBook;
