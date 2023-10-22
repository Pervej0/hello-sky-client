import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { COLORS, FONTS } from "../../../Styles/constants";
import { Link } from "react-router-dom";

const Travel = (props) => {
  const {
    media_image,
    destination_title,
    short_description,
    destination,
    _id,
  } = props.item;

  return (
    <TravelCard>
      <Box>
        <img
          style={{ objectFit: "contain" }}
          src={media_image}
          alt="location media"
          width="100%"
          height="auto"
        />
      </Box>
      <ContentBox className="travelContent">
        <Typography variant="span" component="span">
          {destination_title}
        </Typography>
        <Typography variant="h5" component="h5">
          {destination}
        </Typography>
        <Typography variant="p" component="p">
          {short_description}
        </Typography>
        <Link to={`/experience/${_id}`} style={{ textDecoration: "none" }}>
          <Button variant="outlined">Book Now</Button>
        </Link>
      </ContentBox>
    </TravelCard>
  );
};

const TravelCard = styled(Card)`
  height: 330px;
  :hover {
    box-shadow: 0px 6px 5px 0px rgba(52, 73, 94, 0.5);
  }

  @media only screen and (max-width: 600px) {
    height: 330px;
  }
`;

const ContentBox = styled(Box)`
  text-align: center;
  font-family: ${FONTS.PRIMARY};
  padding: 12px 10px 25px 10px;
  span {
    display: inline-block;
    text-align: center;
    letter-spacing: 1.6px;
    color: ${COLORS.GRAY1};
  }

  h5 {
    font-weight: bold;
    margin: 10px 0px 15px 0px;
  }
  p {
    margin-bottom: 16px;
    font-weight: 500;
  }
`;

export default Travel;
