import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { COLORS, FONTS } from "../../../Styles/constants";
import AirplaneTicketTwoToneIcon from "@mui/icons-material/AirplaneTicketTwoTone";
import PermIdentityTwoToneIcon from "@mui/icons-material/PermIdentityTwoTone";
import styled from "styled-components";
import { useState } from "react";

function CheckIn(props) {
  const { children, value, index, ...other } = props;
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const hamdldeSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    e.target.reset();
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          <CheckInContainer
            className="checkIn"
            sx={{ padding: 3, bgcolor: COLORS.WHITE, paddingBottom: "40px" }}
          >
            <Typography
              my={1}
              mb={2}
              sx={{ fontFamily: FONTS.SECONDARY, fontWeight: "500" }}
            >
              - Web Check-in starts 24 hours in advance before flight departure
            </Typography>
            <form onSubmit={hamdldeSubmit} autoComplete>
              <Grid container spacing={2}>
                <Grid item sm={5} xs={12}>
                  <InputLabel>Booking Reference (PNR)*</InputLabel>
                  <TextField
                    sx={{ width: "100%" }}
                    InputProps={{
                      startAdornment: (
                        <AirplaneTicketTwoToneIcon
                          sx={{ paddingRight: "5px" }}
                        />
                      ),
                    }}
                    name="bookingPnr"
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Booking Reference PNR"
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item sm={5} xs={12}>
                  <InputLabel>Last Name *</InputLabel>
                  <TextField
                    sx={{ width: "100%" }}
                    InputProps={{
                      startAdornment: (
                        <PermIdentityTwoToneIcon sx={{ paddingRight: "5px" }} />
                      ),
                    }}
                    id="outlined-basic"
                    variant="outlined"
                    name="lastName"
                    placeholder="Enter Last Name"
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item sm={2} xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: "100%", marginTop: "36px", height: "55px" }}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CheckInContainer>
        </>
      )}
    </div>
  );
}

const CheckInContainer = styled(Box)`
  font-family: ${FONTS.SECONDARY};
  label {
    font-family: ${FONTS.PRIMARY};
    font-weight: 500;
    display: block;
    margin-bottom: 14px;
  }
`;

export default CheckIn;
