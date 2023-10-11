import {
  Box,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, CustomButton } from "../../../Styles/constants";
import Navbar from "../../Navbar/Navbar";

const SinglePost = (props) => {
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
        <Box className="singleCard" sx={{ mx: 2 }}>
          <MediaBox>
            <Overlap className="overlap" />
            <CardMedia
              className="cardMedia"
              src="https://images.unsplash.com/photo-1540339832862-474599807836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
              alt="green iguana"
            />
          </MediaBox>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Link style={{ width: "100%" }} to="/explore">
              <CustomButton
                sx={{ width: "100%" }}
                variant="contained"
                size="small"
              >
                Read More
              </CustomButton>
            </Link>
          </CardActions>
        </Box>
      </Container>
    </>
  );
};

const MediaBox = styled(Box)`
  position: relative;
  left: 0;
  top: 0;
  height: 150px;
  width: 100%;
  overflow: hidden;
  :hover img {
    transform: scale(1.2);
  }
`;

const CardMedia = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  /* transform: scale(1); */
  transition: ease 0.4s;
`;

const Overlap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.5);
  transition: linear 0.4s;
  :hover {
    background-color: transparent;
  }
`;

export default SinglePost;
