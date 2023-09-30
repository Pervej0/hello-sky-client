import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { COLORS, FONTS, IMAGES } from "../../../Styles/constants";
import styled from "styled-components";
import AlarmIcon from "@mui/icons-material/Alarm";
import { Flight } from "@mui/icons-material";

const LowFareCard = (props) => {
  const {
    url,
    name,
    direction,
    duration,
    flightType,
    decimalCost,
    cost,
    lowestCost,
    highestCost,
  } = props;
  return (
    <CardBox>
      <Box>
        <img src={url} alt="Delhi Trip" width="100%" height="230px" />
      </Box>
      <CardContent className="cardContent">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="small" component="small">
              {direction}
            </Typography>
            <Typography variant="small" component="small">
              {duration}
            </Typography>
          </Box>
          <Box>
            <Typography className="currency" variant="h6" component="h6">
              ${cost}
              <sup style={{ fontSize: "14px" }}>{decimalCost}*</sup>
            </Typography>
            <Typography variant="small" component="small">
              {flightType}
            </Typography>
          </Box>
        </Box>
        <Box>
          <CustomRange />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: COLORS.GRAY1,
              fontSize: "15px",
            }}
          >
            <Typography variant="span" component="span">
              ${lowestCost}
            </Typography>
            <Typography variant="span" component="span">
              ${highestCost}
            </Typography>
          </Box>
          <Typography
            variant="small"
            component="small"
            sx={{ textAlign: "center" }}
          >
            Similar trip cost to {name}
            <AlarmIcon fontSize="xs" />
          </Typography>
        </Box>
      </CardContent>
    </CardBox>
  );
};

const CardBox = styled(Card)`
  font-family: ${FONTS.SECONDARY};
  margin: 0px 10px;
  h5,
  h6 {
    font-family: ${FONTS.SECONDARY};
    font-weight: 600;
  }

  .cardContent {
    small {
      display: block;
      color: ${COLORS.GRAY1};
      font-size: 14px;
      margin: 6px 0px;
    }
  }

  .currency {
    color: green;
  }
`;

const CustomRange = styled.div`
  margin: 16px 0px 5px 0px;
  height: 8px;
  width: 100%;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    #008a04,
    #edb743 30.73%,
    #fbbc04 66.15%,
    #f11515
  );
`;

export default LowFareCard;
