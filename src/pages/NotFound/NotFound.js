import { Container } from "@mui/material";
import React from "react";
import NotFoundImage from "../../images/notfound/notfound.jpg";
import { COLORS } from "../../Styles/constants";
import Navbar from "../../Components/Navbar/Navbar";

const NotFound = () => {
  return (
    <Container maxWidth="true" sx={{ background: COLORS.BLACK1 }}>
      <Navbar />
      <Container sx={{ textAlign: "center" }}>
        <img src={NotFoundImage} alt="" />
      </Container>
    </Container>
  );
};

export default NotFound;
