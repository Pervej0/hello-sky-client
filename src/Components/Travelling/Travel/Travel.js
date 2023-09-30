import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { COLORS, FONTS } from "../../../Styles/constants";

const Travel = (props) => {
  return (
    <Container>
      <TravelCard>
        <Box>
          <img
            style={{ objectFit: "contain" }}
            src="https://c.ekstatic.net/shared/images/destination/v1/airports/ABJ/810x270.jpg"
            alt="location media"
            width="100%"
            height="auto"
          />
        </Box>
        <ContentBox className="travelContent">
          <Typography variant="span" component="span">
            United Kingdom
          </Typography>
          <Typography variant="h5" component="h5">
            London
          </Typography>
          <Typography variant="p" component="p">
            Helo London
          </Typography>
        </ContentBox>
      </TravelCard>
    </Container>
  );
};

const TravelCard = styled(Card)`
  :hover {
    box-shadow: 0px 6px 5px 0px rgba(52, 73, 94, 0.5);
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
    font-weight: 500;
  }
`;

export default Travel;
