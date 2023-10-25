import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { COLORS, CustomTypography, FONTS } from "../../Styles/constants";
import styled from "styled-components";
import { useAuth } from "../../Hooks/useAuth";
import MobileBar from "../MobileBar/MobileBar";

const Navbar = () => {
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const { user, logOut } = useAuth();
  if (!user) return;

  return (
    <MainContainer>
      <Box className="mobileBar">
        <MobileBar />
      </Box>
      <Box className="desktopBar">
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
                <NavLink to="/">Home</NavLink>
              </ListItem>
              <ListItem>
                <Link to="/explore">Explore</Link>
              </ListItem>
              <ListItem>
                <Link to="/experience">Experience</Link>
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
                  <Box sx={{ position: "relative" }}>
                    <Box
                      sx={{ display: "flex" }}
                      onClick={() =>
                        isProfileClicked
                          ? setIsProfileClicked(false)
                          : setIsProfileClicked(true)
                      }
                    >
                      <img
                        style={{
                          height: 35,
                          width: 35,
                          marginRight: "10px",
                          borderRadius: "50px",
                        }}
                        src={user.photoURL}
                        alt="The house from the offer."
                      />
                    </Box>
                    {isProfileClicked && (
                      <CustomBox>
                        <List>
                          <ListItem className="nameField">
                            {user.displayName}
                          </ListItem>
                          <ListItem>
                            <Link to="/dashboard">Dashboard</Link>
                          </ListItem>
                          <ListItem>
                            <Link to="/dashboard/settings">Settings</Link>
                          </ListItem>
                          <ListItem>
                            <Link onClick={logOut} type="button">
                              Log out
                            </Link>
                          </ListItem>
                        </List>
                      </CustomBox>
                    )}
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </NavbarGrid>
      </Box>
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  .mobileBar {
    display: none;
  }
  @media only screen and (max-width: 900px) {
    .mobileBar {
      display: inherit;
    }
    .desktopBar {
      display: none;
    }
  }
`;

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

const CustomBox = styled(Box)`
  position: absolute;
  right: 0;
  z-index: 1;
  min-height: 200px;
  width: 200px;
  background-color: ${COLORS.WHITE};
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  li:not(.nameField) {
    padding-bottom: 0px;
  }
  li a {
    color: ${COLORS.BLACK} !important;
  }
  .nameField {
    justify-content: center;
    font-weight: 500;
    font-size: ${CustomTypography.MEDIUM};
    border-bottom: 2px solid black;
    font-family: ${FONTS.SECONDARY};
  }
`;

export default Navbar;
