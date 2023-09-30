import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { COLORS, CustomTypography, FONTS } from "../../Styles/constants";
import styled from "styled-components";
import { useAuth } from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  return (
    <Container>
      <NavbarGrid
        py={3}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box className="navbarBrand">
          <Link to="/">
            <Typography
              sx={{
                fontWeight: "bold",
              }}
            >
              Hello Sky
            </Typography>
          </Link>
        </Box>
        <Box
          className="navbar-item"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <List sx={{ display: "flex", flexDirection: "row" }}>
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link to="/explore">Explore</Link>
            </ListItem>
            <ListItem>
              <Link to="/exprience">Exprience</Link>
            </ListItem>
          </List>
          <Box className="accountBox">
            {!user?.email ? (
              <>
                <Link to="/login">Login</Link>
                <Link to="/registration">Register</Link>
              </>
            ) : (
              <>
                <Box sx={{ display: "flex" }}>
                  <Box
                    component="img"
                    sx={{
                      height: 35,
                      width: 35,
                      marginRight: "10px",
                      borderRadius: "50px",
                    }}
                    src={user?.photoURL}
                    alt="The house from the offer."
                  />
                  <Link onClick={logOut} type="button">
                    Log out
                  </Link>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </NavbarGrid>
    </Container>
  );
};

const NavbarGrid = styled(Grid)`
  .navbarBrand a,
  .navbarBrand p {
    text-decoration: none;
    color: ${COLORS.WHITE};
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
    color: ${COLORS.WHITE};
    border: 1px solid ${COLORS.WHITE};
    padding: 4px 10px;
    margin-left: 5px;
    text-decoration: none;
    border-radius: 5px;
  }

  .logOutBtn {
    background: white;
    color: BLACK;
    font-weight: 600;
  }
`;

export default Navbar;
