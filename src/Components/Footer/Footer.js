import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { COLORS, CustomTypography, FONTS } from "../../Styles/constants";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SpaIcon from "@mui/icons-material/Spa";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LuggageIcon from "@mui/icons-material/Luggage";
import { Link } from "react-router-dom";
import facebookCom from "../../images/our-partners/facebook.png";
import amazonCom from "../../images/our-partners/amazon.jpg";
import intelCom from "../../images/our-partners/intel.png";
import microsoftCom from "../../images/our-partners/microsoft.jpg";
import salesforceCom from "../../images/our-partners/salesforce.png";
import wellsfargoCom from "../../images/our-partners/wellsfargo.png";

const Footer = () => {
  return (
    <MainContainer maxWidth="true">
      <Container sx={{ py: 8 }}>
        <Grid container spacing={3} sx={{ pb: 4 }}>
          <Grid item xs={12} md={4} lg={4}>
            <Typography
              variant="h1"
              sx={{
                color: COLORS.WHITE_LIGHT,
                fontSize: CustomTypography.HUGE,
                fontFamily: FONTS.THIRD,
                fontStyle: "italic",
                marginBottom: 2,
              }}
            >
              Hello Sky
            </Typography>
            <Typography variant="p" className="footerText footerDesc">
              From the begining to now we are the top ranked company in flying
              industry. From the begining to now we are the top ranked company
              in flying industry.
            </Typography>
            <IconBox>
              <ListItemIcon className="listIcon">
                <MailOutlineIcon sx={{ color: COLORS.WHITE }} />
              </ListItemIcon>
              <Typography variant="span" className="footerText">
                info@hellosky.com
              </Typography>
            </IconBox>
            <IconBox>
              <ListItemIcon className="listIcon">
                <CallIcon sx={{ color: COLORS.WHITE }} />
              </ListItemIcon>
              <Typography variant="span" className="footerText">
                +88 01684******
              </Typography>
            </IconBox>
            <IconBox sx={{ mt: 2 }}>
              <ListItemIcon>
                <Link to="https://www.facebook.com/" target="/blank">
                  <FacebookIcon className="facebook" />
                </Link>
              </ListItemIcon>
              <ListItemIcon>
                <Link to="https://www.youtube.com/" target="/blank">
                  <YouTubeIcon className="youtube" />
                </Link>
              </ListItemIcon>
              <ListItemIcon>
                <Link to="https://twitter.com/" target="/blank">
                  <TwitterIcon className="twitter" />
                </Link>
              </ListItemIcon>
              <ListItemIcon>
                <Link to="https://www.instagram.com/" target="/blank">
                  <InstagramIcon className="instagram" />
                </Link>
              </ListItemIcon>
            </IconBox>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <FooterHeading variant="h6" sx={{ marginBottom: 2 }}>
              FEATURES & Quality
            </FooterHeading>
            <List className="listItem">
              <ListItemButton sx={{ p: 0 }} className="footerText">
                <ListItemIcon className="footerText">
                  <ThumbUpIcon />
                </ListItemIcon>
                <ListItemText primary="Top Ranked Company" />
              </ListItemButton>
              <ListItemButton sx={{ px: 0 }} className="footerText">
                <ListItemIcon className="footerText">
                  <SpaIcon />
                </ListItemIcon>
                <ListItemText primary="99.99% Customer Satisfaction" />
              </ListItemButton>
              <ListItemButton sx={{ px: 0 }} className="footerText">
                <ListItemIcon className="footerText">
                  <LockOpenIcon />
                </ListItemIcon>
                <ListItemText primary="24/7 Weeks Open" />
              </ListItemButton>
              <ListItemButton sx={{ px: 0 }} className="footerText">
                <ListItemIcon className="footerText">
                  <LockOpenIcon />
                </ListItemIcon>
                <ListItemText primary="24/7 Weeks Open" />
              </ListItemButton>
              <ListItemButton sx={{ px: 0 }} className="footerText">
                <ListItemIcon className="footerText">
                  <LuggageIcon />
                </ListItemIcon>
                <ListItemText primary="Emergency Flight Book" />
              </ListItemButton>
            </List>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <FooterHeading variant="h6" sx={{ marginBottom: 4 }}>
              Our Pertners
            </FooterHeading>
            <Grid container spacing={1} className="our-partners">
              <Grid item xs={3}>
                <img
                  height="50"
                  width="100%"
                  src={facebookCom}
                  alt="facebook"
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  height="50"
                  width="100%"
                  src={microsoftCom}
                  alt="microsoft"
                />
              </Grid>
              <Grid item xs={3}>
                <img height="50" width="100%" src={amazonCom} alt="amazon" />
              </Grid>
              <Grid item xs={3}>
                <img height="50" width="100%" src={intelCom} alt="intel" />
              </Grid>
              <Grid item xs={3}>
                <img height="50" width="100%" src={salesforceCom} alt="intel" />
              </Grid>
              <Grid item xs={3}>
                <img height="50" width="100%" src={wellsfargoCom} alt="intel" />
              </Grid>
              <Grid item xs={3}>
                <img
                  height="50"
                  width="100%"
                  src={microsoftCom}
                  alt="microsoft"
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  height="50"
                  width="100%"
                  src={facebookCom}
                  alt="facebook"
                />
              </Grid>
              <Grid item xs={3}>
                <img height="50" width="100%" src={amazonCom} alt="facebook" />
              </Grid>
              <Grid item xs={3}>
                <img height="50" width="100%" src={intelCom} alt="facebook" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <hr />
        <Box className="lastFooter">
          <Typography variant="p">
            Developed By{" "}
            <Link to="https://pervej0.web.app/" target="/blank">
              Pervej
            </Link>{" "}
            All &copy; Copyright reserves
          </Typography>
        </Box>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  background-color: ${COLORS.BLACK2};
  .footerText {
    color: ${COLORS.WHITE};
  }
  .footerDesc {
    font-family: ${FONTS.SECONDARY};
    font-size: ${CustomTypography.EXTRA_SMALL};
  }

  .listItem {
    font-family: ${FONTS.SECONDARY};
    font-size: ${CustomTypography.EXTRA_SMALL} !important;
  }
  .lastFooter {
    margin-top: 16px;
    text-align: center;
    color: ${COLORS.WHITE};
    font-size: ${CustomTypography.EXTRA_SMALL};
    a {
      text-decoration: none;
      color: white;
      color: blue;
      font-weight: bold;
    }
  }
`;

const IconBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 0.6rem;
  color: ${COLORS.WHITE};
  font-family: ${FONTS.SECONDARY};
  .listIcon {
    min-width: 30px;
  }
  a {
    text-decoration: none;
    color: ${COLORS.WHITE};
  }
  .MuiListItemIcon-root:not(.listIcon) {
    color: ${COLORS.WHITE};
    .facebook:hover {
      color: ${COLORS.BLUE2};
    }
    .youtube:hover {
      color: ${COLORS.RED};
    }
    .twitter:hover {
      color: ${COLORS.BLUE1};
    }
    .instagram:hover {
      color: ${COLORS.RED1};
    }
  }
`;

const FooterHeading = styled(Typography)`
  font-size: 18px !important;
  font-family: ${FONTS.PRIMARY} !important;
  text-transform: uppercase;
  color: ${COLORS.WHITE};
`;

export default Footer;
