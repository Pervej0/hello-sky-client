import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { COLORS, CustomTypography, FONTS } from "../../Styles/constants";
import styled from "styled-components";

const Navbar2 = () => {
  const location = useLocation();

  return (
    <FullWidthContainer
      sx={{
        border: "1px solid #000000",
        background: COLORS.WHITE_LIGHT,
      }}
      maxWidth="true"
    >
      <Container>
        <NavbarGrid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box className="navbarBrand">
            <Link to="/">
              <Typography sx={{ fontWeight: "bold" }}>Hello Sky</Typography>
            </Link>
          </Box>
          <Box className="accountBox">
            {/* <Link to="/login">Login</Link>
          <Link to="/Registration">Register</Link> */}
            {location.pathname === "/registration" ? (
              <Link to="/login">Login</Link>
            ) : (
              <Link to="/registration">Register</Link>
            )}
          </Box>
        </NavbarGrid>
      </Container>
    </FullWidthContainer>
  );
};

const FullWidthContainer = styled(Container)`
  padding: 14px 0px;
`;

const NavbarGrid = styled(Grid)`
  .navbarBrand a,
  .navbarBrand p {
    text-decoration: none;
    color: ${COLORS.BLACK};
    font-size: ${CustomTypography.HUGE};
    font-family: ${FONTS.THIRD};
    font-style: "italic";
  }

  .navbar-item li a {
    color: ${COLORS.WHITE};
    font-size: 17px;
    padding-bottom: 2px;
    font-family: "Roboto Mono", monospace;
    font-weight: 600;
    text-decoration: none;
    position: relative;
  }

  .navbar-item li a:after {
    content: "";
    position: absolute;
    left: 0;
    top: 100%;
    width: 0;
    height: 3px;
    background-color: ${COLORS.WHITE};
    transition: 0.2s linear;
  }

  .navbar-item li a:hover {
    color: ${COLORS.WHITE_LIGHT};
  }

  .navbar-item li a:hover:after {
    width: 100%;
  }

  .accountBox a {
    color: ${COLORS.BLACK};
    border: 1px solid ${COLORS.BLACK};
    padding: 4px 10px;
    margin-left: 5px;
    text-decoration: none;
    border-radius: 5px;
  }
`;

export default Navbar2;
