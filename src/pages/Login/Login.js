import { Box, Container } from "@mui/material";
import React from "react";
import Navbar2 from "../../Components/Navbar/Navbar2";

const Login = () => {
  return (
    <>
      <Navbar2 />
      <Container>
        <Box>
          <form>
            <label>Enter your email</label>
            <input type="email" name="email" placeholder="Email here.." />
            <label>Enter Your Password</label>
            <input type="email" name="email" placeholder="Email here.." />
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Login;
