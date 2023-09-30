import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FONTS } from "../../Styles/constants";
import Travel from "./Travel/Travel";

const Travelling = (props) => {
  const [travelList, setTravelList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/travels_destination")
      .then((res) => res.json())
      .then((data) => setTravelList(data[0].details));
  }, []);

  const handleChange = () => {};
  return (
    <Container sx={{ my: 6 }}>
      <CustomContent sx={{ mb: 5 }}>
        <Typography variant="h4" component="h4">
          Explore Travelling Destination
        </Typography>
        {props.showDesc && (
          <Typography variant="p" component="p">
            Search and book your next flight. Fly Emirates to destinations
            across Africa, the Americas, Asia, Europe, the Middle East and the
            Pacific.
          </Typography>
        )}
      </CustomContent>
      {props.showDesc && (
        <Box sx={{ textAlign: "center" }}>
          <CustomTextField
            type="text"
            placeholder="Enter Location"
            name="location"
            onChange={handleChange()}
          />
        </Box>
      )}
      <Box sx={{ mt: 6 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Travel />
          </Grid>
          {props.fromHome ? (
            <>
              <Grid item xs={12} md={3}>
                <Travel />
              </Grid>
            </>
          ) : (
            <Grid item xs={12} md={4}>
              <Travel />
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

const CustomContent = styled(Box)`
  text-align: center;
  font-family: ${FONTS.PRIMARY};
  h4 {
    margin-bottom: 0.5rem;
    font-size: 38px;
  }
  p {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
  @media only screen and (max-width: 525px) {
    h4 {
      font-size: 25px;
    }
    p {
      width: 100%;
      text-align: center;
    }
  }
`;

const CustomTextField = styled(TextField)`
  width: 50%;
  margin: 0 auto;
  display: block;
  @media only screen and (max-width: 1024px) {
    width: 75%;
  }
  @media only screen and (max-width: 525px) {
    width: 100%;
  }
`;

export default Travelling;
