import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { FONTS } from "../../Styles/constants";
import ExpVideo from "../../images/explore/explore.mp4";

const ExploreVideo = () => {
  return (
    <MainContent>
      <Grid container spacing={4} sx={{ alignItems: "center" }}>
        <Grid item sm={6} xs={12} sx={{ my: 4 }} className="girdItem video">
          <video
            style={{ objectFit: "cover" }}
            width="100%"
            height="100%"
            controls
            loop
            autoPlay="true"
          >
            <source src={ExpVideo} />
          </video>
        </Grid>
        <Grid item sm={6} xs={12} sx={{ my: 8 }} className="gridItem">
          <ConntentBox>
            <Typography variant="h3">The Real experience</Typography>
            <Typography variant="h5">The Real experience</Typography>
            <Typography sx={{ mt: 2 }}>
              The airline was formed by former Air Vice-Marshal Don Bennett at
              Langley Airfield, Berkshire, to operate in the Berlin Airlift with
              two long-fuselage Avro Tudor aircraft.[1][2] These were flown by
              Bennett and a single other pilot, WWII RAF veteran Stanley
              Sickelmore, Bennett having the only night flight licence made all
              the nighttime trips himself with Sickelmore as co-pilot. One of
              the Tudor aircraft had operated 85 sorties carrying over 9 tons of
              supplies per flight between Wunsdorf and Gatow.[2] At the end of
              the Berlin Airlift the aircraft were used for trooping charters to
              the Canal Zone for the British government and ad hoc charters. One
              of the charters was to end in disaster when G-AKBY was used for a
              rugby charter and crashed on approach to RAF Llandow in Wales on
              12 March 1950.[1] The month after the disaster the company merged
              into one of Bennett's other companies Fairflight Limited on 28
              April 1950.[3] In 1951, Bennett sold Airflight on to Air Charter,
              a small company operating out of Luton under Freddie Laker.[4]
              Airflight Ltd was dissolved in 1965[5] and Fairflight was formally
              wound up in 1966.[6]
            </Typography>
          </ConntentBox>
        </Grid>
      </Grid>
    </MainContent>
  );
};

const MainContent = styled(Container)`
  .girdItem {
    height: 90vh;
    @media only screen and (max-width: 900px) {
      height: auto;
    }
    @media only screen and (max-width: 900px) {
      height: auto;
      padding: 0 auto;
    }
  }
  .girdItem.video {
    @media only screen and (max-width: 600px) {
      height: 100vh;
    }
  }
`;
const ConntentBox = styled(Box)`
  h3,
  h5 {
    font-family: ${FONTS.PRIMARY};
  }
  p {
    font-family: ${FONTS.SECONDARY};
  }
  @media only screen and (max-width: 900px) {
    h3 {
      font-size: 30px;
    }
    h5 {
      font-size: 20px;
    }
  }
`;

export default ExploreVideo;
