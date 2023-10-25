import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { COLORS, CustomTypography, FONTS } from "../../Styles/constants";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../../Hooks/useAuth";

const MobileBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <MobileBox>
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
        <Box>
          <ListItemButton
            sx={{ width: "30px" }}
            onClick={() =>
              isClicked ? setIsClicked(false) : setIsClicked(true)
            }
          >
            <MenuIcon sx={{ color: "white" }} fontSize="large" />
          </ListItemButton>
        </Box>
      </MobileBox>
      {isClicked && (
        <MenuItem>
          <List>
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link to="/explore">Explore</Link>
            </ListItem>
            <ListItem>
              <Link to="/exprience">Experience</Link>
            </ListItem>
            <ListItem className="accountBox">
              <Box>
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
                      <Link onClick={() => logOut(navigate)} type="button">
                        Log out
                      </Link>
                    </Box>
                  </>
                )}
              </Box>
            </ListItem>
          </List>
        </MenuItem>
      )}
    </>
  );
};

const MobileBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;

  .navbarBrand a,
  .navbarBrand p {
    text-decoration: none;
    color: ${COLORS.WHITE};
    font-size: ${CustomTypography.EXTRA_LARGE} !important;
    font-family: ${FONTS.THIRD};
    font-style: "italic";
  }
`;

const MenuItem = styled(Box)`
  transition: 0.4s ease;
  background-color: ${COLORS.BLACK1};

  li {
    justify-content: flex-end;
  }

  li:not(.accountBox) a {
    text-decoration: none;
    color: ${COLORS.WHITE};
    font-family: ${FONTS.PRIMARY};
    font-weight: bold;
    letter-spacing: 0.1rem;
    font-size: ${CustomTypography.MEDIUM};
    padding: 5px 10px;
  }

  .accountBox a {
    color: ${COLORS.WHITE};
    border: 1px solid ${COLORS.WHITE};
    padding: 4px 10px;
    margin-left: 5px;
    text-decoration: none;
    border-radius: 5px;
  }
`;

export default MobileBar;
