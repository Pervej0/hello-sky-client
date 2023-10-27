import {
  Box,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { COLORS, CustomButton, FONTS } from "../../../Styles/constants";
import Navbar from "../../Navbar/Navbar";

const SinglePost = (props) => {
  const [singleExplorePost, setSingleExplorePost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { postId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://hello-sky-server.onrender.com/travels_post/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleExplorePost(data);
        setIsLoading(false);
      });
  }, []);

  console.log(singleExplorePost, "xxxxxx");
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
        <Container sx={{ mt: 5 }}>
          <Box className="singleCard" sx={{ mx: 2 }}>
            <MediaBox>
              <Overlap className="overlap" />
              <CardMedia
                className="cardMedia"
                src={singleExplorePost.media_image}
                alt="green iguana"
              />
            </MediaBox>
            <CardContentModify>
              <Typography gutterBottom variant="h5" component="div">
                Discover The {singleExplorePost.travelingCountry} City
              </Typography>
              <Typography variant="span">
                {singleExplorePost.travelingCountry}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContentModify>
          </Box>
        </Container>
      </Container>
    </>
  );
};

const MediaBox = styled(Box)`
  position: relative;
  left: 0;
  top: 0;
  height: 250px;
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
  color: ${COLORS.WHITE};
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

const CardContentModify = styled(CardContent)`
  margin-top: 2rem;
  color: ${COLORS.WHITE};
  font-family: ${FONTS.SECONDARY};
  span {
    letter-spacing: 4px;
    text-transform: uppercase;
  }
  p {
    font-family: ${FONTS.SECONDARY};
    margin-top: 16px;
    color: ${COLORS.WHITE};
  }
`;

export default SinglePost;
