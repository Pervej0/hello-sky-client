import React from "react";
import ContentTitle from "../ContentTitle/ContentTitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { COLORS, FONTS } from "../../Styles/constants";
import { Link } from "react-router-dom";

const ExplorePosts = () => {
  return (
    <>
      <ContentTitle value="See Our Recent Posts" color="black" />
      <PostContainer sx={{ my: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box className="torontoTravel">
              <Typography variant="span" component="span">
                Toronto and The Canada
              </Typography>
              <Typography variant="h5" component="h5">
                Discover Toronto
              </Typography>
              <Link to="#">Learn More</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
      </PostContainer>
    </>
  );
};

const PostContainer = styled(Container)`
  .torontoTravel {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)),
      url("https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80"),
      no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 80vh;
    font-family: ${FONTS.PRIMARY};
    padding: 30px;
    color: ${COLORS.WHITE};

    span {
      text-transform: uppercase;
      letter-spacing: 3px;
      color: ${COLORS.WHITE};
      font-size: 14px;
      font-weight: lighter;
      display: inline-block;
    }
    h5 {
      font-size: 35px;
      margin: 30px 0px 10px 0px;
    }

    a {
      color: ${COLORS.WHITE};
      text-underline-offset: 6px;
    }
  }
`;

export default ExplorePosts;
