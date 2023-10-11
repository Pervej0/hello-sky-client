import React, { useEffect, useState } from "react";
import ContentTitle from "../ContentTitle/ContentTitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { COLORS, FONTS } from "../../Styles/constants";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const ExplorePosts = ({ showSlide }) => {
  const [travelPosts, setTravelPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/travels_post")
      .then((res) => res.json())
      .then((data) => {
        setTravelPosts(data);
        setIsLoading(false);
      });
  }, []);
  console.log(travelPosts[0]);
  const { media_image, travelingCity, travelingCountry, _id } =
    !isLoading && travelPosts[0];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <ContentTitle value="Explore Our Recent Posts" color="black" />
      <Container sx={{ my: 10 }}>
        {showSlide && !isLoading && (
          <Slider {...settings}>
            {travelPosts.map((item) => (
              <TravelField
                urlLink={item.media_image}
                sx={{
                  height: "80vh",
                }}
              >
                <Box
                  sx={{
                    p: 4,
                  }}
                >
                  <Typography variant="span" component="span">
                    {item.travelingCity} and The {item.travelingCountry}
                  </Typography>
                  <Typography variant="h5" component="h5">
                    Discover {item.travelingCity}
                  </Typography>
                  <Link to={`/explore/${item._id}`}>Learn More</Link>
                </Box>
              </TravelField>
            ))}
          </Slider>
        )}
        {!isLoading && !showSlide && (
          <Grid container sx={{ height: "80vh" }}>
            <Grid item xs={12} sm={5}>
              <TravelField urlLink={media_image}>
                <Box sx={{ p: 4 }}>
                  <Typography variant="span" component="span">
                    {travelingCity} and The {travelingCountry}
                  </Typography>
                  <Typography variant="h5" component="h5">
                    Discover {travelingCity}
                  </Typography>
                  <Link to={`/explore/${_id}`}>Learn More</Link>
                </Box>
              </TravelField>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Grid container sx={{ height: "80vh" }}>
                {travelPosts.slice(1, 3).map((item) => (
                  <Grid item md={6} sm={12}>
                    <TravelField urlLink={item.media_image}>
                      <Box sx={{ p: 4 }}>
                        <Typography variant="span" component="span">
                          {item.travelingCity} and The {item.travelingCountry}
                        </Typography>
                        <Typography variant="h5" component="h5">
                          Discover {item.travelingCity}
                        </Typography>
                        <Link to={`/explore/${item._id}`}>Learn More</Link>
                      </Box>
                    </TravelField>
                  </Grid>
                ))}

                <Grid item xs={12}>
                  <TravelField urlLink={travelPosts[4].media_image}>
                    <Box sx={{ p: 4 }}>
                      <Typography variant="span" component="span">
                        {travelPosts[4].travelingCity} and The{" "}
                        {travelPosts[4].travelingCountry}
                      </Typography>
                      <Typography variant="h5" component="h5">
                        Discover Sydeny
                      </Typography>
                      <Link to={`/explore/${travelPosts[4]._id}`}>
                        Learn More
                      </Link>
                    </Box>
                  </TravelField>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

const TravelField = styled(Box)`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
    url(${({ urlLink }) => urlLink}) no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  /* padding: 2rem 0; */
  font-family: ${FONTS.PRIMARY};
  color: ${COLORS.WHITE};

  span {
    text-transform: uppercase;
    letter-spacing: 3px;
    color: ${COLORS.WHITE};
    font-size: 13px;
    font-weight: lighter;
    display: inline-block;
  }
  h5 {
    font-size: 30px;
    margin: 30px 0px 10px 0px;
  }

  a {
    color: ${COLORS.WHITE};
    text-underline-offset: 6px;
  }
`;

export default ExplorePosts;
