import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

const BannerContainer = (props) => {
  const { URL, height, position } = props;
  const Banner = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
          url(${URL}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: position,
    width: "100%",
    height: height,
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
