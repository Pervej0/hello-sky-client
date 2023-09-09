import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar2 from "../../Components/Navbar/Navbar2";
import { useAuth } from "../../Hooks/useAuth";
import { COLORS, CustomTypography } from "../../Styles/constants";
import GoogleIcon from "@mui/icons-material/Google";

const Login = () => {
  const [userData, setUserData] = useState({});
  const { error, signIn, signInGoogle } = useAuth();

  const handleInput = (data) => {
    const { name, value } = data.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(userData.Email, userData.Password);
    e.target.reset();
  };
  return (
    <>
      <Navbar2 />
      <Container>
        <Grid container spacing={2} mt={5} mb={3} alignItems="center">
          <Grid item xs={6}>
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ margin: "0 0 1.5rem 0" }}
                label="Email"
                variant="outlined"
                name="Email"
                type="email"
                onChange={handleInput}
                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
                fullWidth="true"
                autoComplete="off"
                required
              />
              <TextField
                sx={{ margin: "0 0 .5rem 0" }}
                label="Password"
                variant="outlined"
                name="Password"
                type="password"
                onChange={handleInput}
                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
                fullWidth="true"
                autoComplete="off"
                required
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
                {error}
              </Typography>
              <Button variant="contained" type="submit">
                Log In
              </Button>
            </form>
            <Typography my={3} sx={{ textAlign: "center" }}>
              ---------------- Or ----------------
            </Typography>
            <Button onClick={signInGoogle} fullWidth="true" variant="contained">
              <GoogleIcon /> &nbsp; Sign In With Google
            </Button>
          </Grid>
          <Grid item xs={6}>
            <h1>geloo</h1>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
