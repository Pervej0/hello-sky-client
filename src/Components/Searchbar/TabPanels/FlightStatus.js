import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  ListItemIcon,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { COLORS, FONTS } from "../../../Styles/constants";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import styled from "styled-components";
import { useState } from "react";

var my_date = new Date();
const today =
  my_date.getDate() +
  "-" +
  (my_date.getMonth() + 1) +
  "-" +
  my_date.getFullYear();
var tomorrow_date =
  my_date.getDate() +
  1 +
  "-" +
  (my_date.getMonth() + 1) +
  "-" +
  my_date.getFullYear();

function FlightStatus(props) {
  const { children, value, index, ...other } = props;
  const [data, setData] = useState({
    flightFrom: "Select Departure City",
    flightTo: "Select Arrival City",
    departDate: `${today}`,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
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
        <FlightStatusContainer
          className="flightStatus"
          sx={{ p: 3, bgcolor: COLORS.WHITE, paddingBottom: "35px" }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item sm={3} xs={12}>
                <FormControl fullWidth>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ fontSize: "20px" }}
                  >
                    Flying From
                  </InputLabel>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  >
                    <ListItemIcon className="iconBox">
                      <FlightTakeoffIcon sx={{ paddingRight: "5px" }} />
                    </ListItemIcon>
                    <Select
                      sx={{ width: "100%", border: 0 }}
                      labelId="Flying From"
                      id="demo-simple-select"
                      value={data.flightFrom}
                      placeholder="Select Departure City"
                      onChange={handleChange}
                      name="flightFrom"
                    >
                      <MenuItem value={data.flightFrom}>
                        {data.flightFrom}
                      </MenuItem>
                      <MenuItem value="Dhaka">Dhaka</MenuItem>
                      <MenuItem value="Delhi">Delhi</MenuItem>
                      <MenuItem value="Toronto">Toronto</MenuItem>
                      <MenuItem value="Dubai">Dubai</MenuItem>
                    </Select>
                  </Box>
                </FormControl>
              </Grid>
              <Grid item sm={3} xs={12}>
                <FormControl fullWidth>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ fontSize: "20px" }}
                  >
                    Flying to
                  </InputLabel>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  >
                    <ListItemIcon className="iconBox">
                      <FlightLandIcon />
                    </ListItemIcon>
                    <Select
                      sx={{ width: "100%", border: "0px" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={data.flightTo}
                      onChange={handleChange}
                      name="flightTo"
                    >
                      <MenuItem value={data.flightTo} sx={{ display: "none" }}>
                        {data.flightTo}
                      </MenuItem>
                      <MenuItem value="Dhaka">Dhaka</MenuItem>
                      <MenuItem value="Delhi">Delhi</MenuItem>
                      <MenuItem value="Toronto">Toronto</MenuItem>
                      <MenuItem value="Dubai">Dubai</MenuItem>
                    </Select>
                  </Box>
                </FormControl>
              </Grid>

              {/* date */}
              <Grid item sm={3} xs={12}>
                <InputLabel id="demo-simple-select-label">
                  Departure Date
                </InputLabel>

                <Select
                  sx={{ width: "100%" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={data.departDate}
                  onChange={handleChange}
                  name="departDate"
                >
                  <MenuItem value={data.departDate} sx={{ display: "none" }}>
                    Today {data.departDate}
                  </MenuItem>
                  <MenuItem value={today}>Today {today}</MenuItem>
                  <MenuItem value={tomorrow_date}>
                    Tomorrow {tomorrow_date}
                  </MenuItem>
                </Select>
              </Grid>
              {/*  */}
              <Grid item sm={3} xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "100%", marginTop: "20px", height: "55px" }}
                >
                  <FlightTakeoffIcon /> &nbsp; Search
                </Button>
              </Grid>
            </Grid>
          </form>
        </FlightStatusContainer>
      )}
    </div>
  );
}

const FlightStatusContainer = styled(Box)`
  .css-mhc70k-MuiGrid-root > .MuiGrid-item:nth-child(3) {
    padding-top: 0px;
  }

  .iconBox {
    min-width: auto;
    margin-right: 5px;
  }
  .flightStatus label,
  label {
    font-family: ${FONTS.PRIMARY};
    font-weight: 500;
    display: inline-block;
    margin-bottom: 10px;
  }
`;

export default FlightStatus;
