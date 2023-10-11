import { Button } from "@mui/material";
import styled from "styled-components";
import { createTheme } from "@mui/material/styles";

// export const theme = createTheme({

// })

export const COLORS = {
  WHITE: "#FFFFFF",
  WHITE_LIGHT: "#D7D7D7",
  GRAY: "#999999",
  GRAY1: "#454545",
  BLACK: "#000000",
  BLACK1: "#34495E",
  BLACK2: "#283747",
  MARON: "#800000",
  OLIV: "#808000",
  AQUA: "#00FFFF",
  BLUE: "#0000FF",
  BLUE1: "#0463CA",
  RED: "#FF0000",
};

export const FONTS = {
  PRIMARY: '"Roboto Mono", monospace',
  SECONDARY: '"Poppins", sans-serif',
  THIRD: "'Italianno', cursive",
};

export const pageGutterSize = {
  xs: 10,
  sm: 10,
  md: 10,
  lg: 10,
  xl: 6,
  spacing: 0,
};

export const CustomTypography = {
  EXTRA_SMALL: "14px",
  SMALL: "16px",
  MEDIUM: "18px",
  LARGE1: "20px",
  LARGE2: "22px",
  LARGE3: "24px",
  LARGE4: "26px",
  LARGE5: "26px",
  LARGE6: "28px",
  EXTRA_LARGE: "30px",
  HUGE: "40px",
};

export const IMAGES = {
  HOME_BANNER:
    "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  EXPLORE_BANNER:
    "https://images.unsplash.com/photo-1564979045531-fa386a275b27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
  experience_BANNER:
    "https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
  LOGIN_BANNER: "",
  USER_PHOTO: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
  REGISTER_BANNER: "",
  FARE_DEAL_DELHI:
    "https://c.fareportal.com/gcms/portals/2/images/destinations/DEL-rx.jpg",
  FARE_DEAL_MANILA:
    "https://c.fareportal.com/gcms/portals/2/images/destinations/MNL-rx.jpg",
  FARE_DEAL_DENPASARBALI:
    "https://c.fareportal.com/gcms/portals/2/images/destinations/DPS-rx.jpg",
};

export const CustomButton = styled(Button)`
  padding: 8px;
  background-color: ${COLORS.BLACK1};
  font-size: 14px;
  mask-position: 0 0;
  -webkit-mask-position: 0 0;
  transition: 0.5s;
  text-transform: uppercase;
  button:hover {
    mask: linear-gradient(135deg, #000c 40%, #000, #000c 60%) 100% 100%/250%
      250%;
    -webkit-mask: linear-gradient(135deg, #000c 40%, #000, #000c 60%) 100% 100%/250%
      250%;

    background-color: ${COLORS.BLUE1};
  }
`;
