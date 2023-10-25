import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";
import { COLORS, CustomTypography, FONTS } from "../../Styles/constants";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BuildIcon from "@mui/icons-material/Build";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useAuth } from "../../Hooks/useAuth";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  if (!user) return;
  return (
    <Container maxWidth="true" sx={{ backgroundColor: COLORS.BLACK1 }}>
      <MainContainer>
        <Box className="mainBox">
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
          <ListItemIcon
            sx={{ cursor: "pointer" }}
            onClick={() => logOut(navigate)}
            data-tooltip-content="Hello world!"
          >
            <LoginIcon sx={{ color: "white", fontSize: "28px" }} />
          </ListItemIcon>
        </Box>
        <Grid container>
          <Grid className="leftBar" item xs={12} md={3}>
            <List>
              <ListItem
                sx={{
                  justifyContent: "center",
                  flexDirection: "column",
                  borderBottom: "1px solid rgba(255,255,255,0.5)",
                  mt: 1,
                }}
              >
                <img
                  src={user.photoURL}
                  alt="profile"
                  width="80px"
                  style={{ borderRadius: "50px" }}
                />
                <Box sx={{ my: 2, textAlign: "center" }}>
                  <Typography variant="h6">{user.displayName}</Typography>
                  {!user?.isAdmin && (
                    <Typography variant="small" component="small">
                      Admin
                    </Typography>
                  )}
                </Box>
              </ListItem>
              <ListItem>
                <HomeIcon />
                &nbsp; <Link to="dashboard">Dashboard</Link>
              </ListItem>

              <ListItem>
                <AccountBoxIcon />
                &nbsp; <Link to="users">All Users</Link>
              </ListItem>
              <ListItem>
                <BookmarkIcon />
                &nbsp; <Link to="booking">My Booking</Link>
              </ListItem>
              <ListItem>
                <BuildIcon />
                &nbsp; <Link to="settings">Settings</Link>
              </ListItem>
              <ListItem>
                <BookmarkIcon />
                &nbsp; <Link to="booking-review">Booking Review</Link>
              </ListItem>
            </List>
          </Grid>
          <Grid className="contentBar" item xs={12} sm={9}>
            <Outlet />
          </Grid>
        </Grid>
      </MainContainer>
    </Container>
  );
};

const MainContainer = styled(Container)`
  font-family: ${FONTS.SECONDARY};
  color: ${COLORS.WHITE};
  .mainBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0px;
    border-bottom: 1px solid white;
  }
  .navbarBrand a,
  .navbarBrand p {
    text-decoration: none;
    color: ${COLORS.WHITE};
    font-size: ${CustomTypography.HUGE};
    font-family: ${FONTS.THIRD};
    font-style: "italic";
  }

  .leftBar {
    min-height: 100vh;
    width: 100%;
    border: 1px solid white;
    border-bottom: 0;
    border-top: 0;
    text-align: center;
    @media only screen and (max-width: 760px) {
      height: auto;
      border-bottom: 1;
    }

    li:nth-child(2) {
      margin-top: 16px;
    }
    li {
      align-items: center;
      justify-content: start;
      color: ${COLORS.WHITE};
      text-transform: uppercase;
      font-weight: 500;
      letter-spacing: 1px;
    }
    a,
    path {
      color: ${COLORS.WHITE};
      font-family: ${FONTS.SECONDARY};
      text-decoration: none;
    }
  }
`;

export default Dashboard;
