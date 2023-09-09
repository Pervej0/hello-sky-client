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
import { COLORS, FONTS } from "../../Styles/constants";
import { Link } from "react-router-dom";
import { CustomTypography } from "../../Styles/constants";
import { useAuth } from "../../Hooks/useAuth";
import GoogleIcon from "@mui/icons-material/Google";

const Registration = () => {
  const [userData, setUserData] = useState({});
  const [userError, setUserError] = useState("");
  const { createUser, signInGoogle } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "Password" && value.length < 6) {
      setUserError("Password at least has to be 6 Length!");
      return;
    } else {
      setUserError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userData.Password !== userData.ConfirmPassword) {
      setUserError("Password dosen't matched!");
      return;
    }
    if (userData.Password === userData.ConfirmPassword) {
      setUserError("");
    }
    console.log(userData, "dataaaaaa");
    createUser(
      userData.Email,
      userData.Password,
      userData.Fullname,
      userData.PhoneNumber
    );
    event.target.reset();
  };

  return (
    <>
      <Navbar2 />
      <Container>
        <Grid alignItems="center" container spacing={3}>
          <Grid item xs={6}>
            <CustomBox>
              <h1>ge</h1>
            </CustomBox>
          </Grid>
          <Grid item xs={6}>
            <FormBox>
              <Typography
                variant="h4"
                pt={3}
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
                  fullWidth="true"
                  autoComplete="off"
                  inputProps={{ maxLength: 40 }}
                  required
                />
                <TextField
                  sx={{ margin: "1rem 0" }}
                  type="number"
                  label="Phone number"
                  variant="outlined"
                  name="PhoneNumber"
                  onChange={handleInput}
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 14);
                  }}
                  fullWidth="true"
                  autoComplete="off"
                  required
                />
                <TextField
                  sx={{ margin: "0 0 1rem 0" }}
                  type="number"
                  label="Age"
                  variant="outlined"
                  name="Age"
                  onChange={handleInput}
                  inputProps={{ maxLength: 3, type: "number" }}
                  fullWidth="true"
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 3);
                  }}
                  autoComplete="off"
                />
                <TextField
                  sx={{ margin: "0 0 1rem 0" }}
                  type="email"
                  label="Email"
                  variant="outlined"
                  name="Email"
                  onChange={handleInput}
                  fullWidth="true"
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
                  inputProps={{ maxLength: 14 }}
                  fullWidth="true"
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
                  inputProps={{ maxLength: 14 }}
                  fullWidth="true"
                  autoComplete="off"
                />
                <Typography
                  variant="span"
                  pb={2}
                  sx={{
                    fontSize: CustomTypography.EXTRA_SMALL,
                    color: COLORS.RED,
                    fontWeight: "600",
                    display: "block",
                  }}
                >
                  {userError}
                </Typography>
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
            <Typography my={3} sx={{ textAlign: "center" }}>
              ---------------- Or ----------------
            </Typography>
            <Button onClick={signInGoogle} fullWidth="true" variant="contained">
              <GoogleIcon /> &nbsp; Sign In With Google
            </Button>
          </Grid>
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
