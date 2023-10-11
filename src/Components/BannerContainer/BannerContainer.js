import { Container } from "@mui/material";
import React from "react";

const BannerContainer = (props) => {
  const { URL, height, position } = props;
  const Banner = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
          url(${URL}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: position,
    width: "100%",
    minHeight: height,
    paddingBottom: "30px",
    margin: "0",
  };
  return (
    <>
      <Container sx={Banner} maxWidth="true">
        {props.children}
      </Container>
      ;
    </>
  );
};
export default BannerContainer;
