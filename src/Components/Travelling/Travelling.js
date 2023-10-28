import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FONTS } from "../../Styles/constants";
import Travel from "./Travel/Travel";
import { Link } from "react-router-dom";

const Travelling = (props) => {
  const [originalTravelLists, setOriginalTravelLists] = useState([]);
  const [travelLists, setTravelLists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState({
    startCount: 0,
    endCount: 6,
  });

  useEffect(() => {
    fetch("https://hello-sky-server.onrender.com/travels_destination")
      .then((res) => res.json())
      .then((data) => {
        setOriginalTravelLists(data);
        setTravelLists(data);
        setIsLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);

    if (value === "") {
      setTravelLists(originalTravelLists); // Restore original data
      return;
    }

    const filterList = originalTravelLists.filter((data) => {
      return (
        data.destination_title.toLowerCase().includes(value) ||
        data.destination.toLowerCase().includes(value)
      );
    });

    setTravelLists(filterList);
  };

  const handlePagination = (e) => {
    if (
      e.target.innerText === "NEXT" &&
      count.endCount <= originalTravelLists.length
    ) {
      setCount((prev) => ({
        startCount: prev.startCount + 6,
        endCount: prev.endCount + 6,
      }));
    } else if (e.target.innerText === "PREVIOUS" && count.startCount !== 0) {
      setCount((prev) => ({
        startCount: prev.startCount - 6,
        endCount: prev.endCount - 6,
      }));
    }
  };

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
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
      {props.showDesc && (
        <Box sx={{ textAlign: "center" }}>
          <CustomTextField
            type="text"
            placeholder="Enter Location"
            name="location"
            onChange={handleChange}
            value={inputValue}
          />
        </Box>
      )}
      <Box sx={{ mt: 6 }}>
        <Grid container spacing={2}>
          {travelLists?.slice(count.startCount, count.endCount).map((data) => (
            <Grid key={data._id} item xs={12} sm={6} md={4}>
              <Travel item={data} />
            </Grid>
          ))}
          <ButtonField>
            {!props.showDesc ? (
              <Link to="/experience">
                <Button variant="outlined">See More</Button>
              </Link>
            ) : (
              <>
                <Button
                  type="button"
                  variant="outlined"
                  onClick={handlePagination}
                >
                  Previous
                </Button>
                <Button
                  type="button"
                  variant="outlined"
                  onClick={handlePagination}
                >
                  Next
                </Button>
              </>
            )}
          </ButtonField>
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

const ButtonField = styled(Box)`
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  button {
    margin-left: 16px;
  }
`;

export default Travelling;
