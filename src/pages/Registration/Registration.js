import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import Navbar2 from "../../Components/Navbar/Navbar2";
import { FONTS } from "../../Styles/constants";
import { Link } from "react-router-dom";

const Registration = () => {
  const [userData, setUserData] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData, "dataaaaaa");
    alert("keioi");
  };

  return (
    <>
      <Navbar2 />
      <Container>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomBox>
            <h1>ge</h1>
          </CustomBox>
          <FormBox>
            <Typography
              variant="h4"
              pt={5}
              pb={3}
              sx={{ fontFamily: FONTS.SECONDARY }}
            >
              It Will Take Only Few Minutes To Create An Account
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Full name"
                variant="outlined"
                name="Fullname"
                onChange={handleInput}
                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                autoComplete="off"
                required
              />
              <TextField
                sx={{ margin: "1rem 0" }}
                type="number"
                label="Phone number"
                variant="outlined"
                name="PhoneNumber"
                onChange={handleInput}
                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                autoComplete="off"
                required
              />
              <TextField
                sx={{ margin: "1rem 0" }}
                type="number"
                label="Age"
                variant="outlined"
                name="Age"
                onChange={handleInput}
                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                autoComplete="off"
              />
              <TextField
                sx={{ margin: "1rem 0" }}
                type="email"
                label="Email"
                variant="outlined"
                name="Email"
                onChange={handleInput}
                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                autoComplete="off"
                required
              />
              <TextField
                sx={{ margin: "0 0 1rem 0" }}
                type="password"
                label="Password"
                variant="outlined"
                name="Password"
                onChange={handleInput}
                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                autoComplete="off"
                required
              />
              <TextField
                sx={{ margin: "0 0 1rem 0" }}
                type="password"
                label="Confirm password"
                variant="outlined"
                name="ConfirmPassword"
                onChange={handleInput}
                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                autoComplete="off"
                required
              />
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </form>
            <Typography
              my={2}
              variant="span"
              sx={{ display: "inline-block", fontFamily: FONTS.SECONDARY }}
            >
              Have already an account? <Link to="/login">Log in</Link>
            </Typography>
          </FormBox>
        </Grid>
      </Container>
    </>
  );
};

const CustomBox = styled(Box)`
  width: 100%;
  padding: 10px;
  border: 1px solid #000000;
`;

const FormBox = styled(Box)`
  width: 100%;
  padding: 10px;

  form label,
  input {
    display: block;
  }
`;

export default Registration;
