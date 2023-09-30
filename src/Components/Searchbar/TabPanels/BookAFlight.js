import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  ListItemIcon,
  ListItemText,
  MenuItem,
  NativeSelect,
  Select,
  Typography,
} from "@mui/material";
import { COLORS, FONTS } from "../../../Styles/constants";
import { useEffect, useState } from "react";
import styled from "styled-components";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import {
  DateField,
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SendTwoToneIcon from "@mui/icons-material/SendTwoTone";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import dayjs from "dayjs";

function BookAFlight(props) {
  const { children, value, index, ...other } = props;
  const [airportList, setAirportList] = useState("");
  const [data, setData] = useState({
    flightFrom: "Select Departure City",
    flightTo: "Select Arrival City",
    flightClass: "Select Flight Type",
    passangers: "1 Adults - 0 Children",
    flyDate: "",
  });
  const [countPassanger, setCountPassanger] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     params: {
  //       bl_lat: "13.607884",
  //       bl_lng: "100.641975",
  //       tr_lat: "13.771029",
  //       tr_lng: "100.861566",
  //       limit: "300",
  //     },
  //     headers: {
  //       "X-RapidAPI-Key": "15d6297e5dmshe5f4660a31ad857p1b116ejsn0fcae74f0c35",
  //       "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  //     },
  //   };
  //   fetch(
  //     "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  //     options
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.rows, "ggggggggggg"))
  //     .catch((error) => console.log(error));
  // }, []);

  const handlePassangerCount = (e) => {
    if (e.target.id === "addInfants" && countPassanger.infants < 3) {
      setCountPassanger((prev) => ({
        ...prev,
        infants: prev.infants + 1,
      }));
    } else if (e.target.id === "removeInfants" && countPassanger.infants > 0) {
      setCountPassanger((prev) => ({
        ...prev,
        infants: prev.infants - 1,
      }));
    }
    // children
    if (e.target.id === "addChildren" && countPassanger.children < 4) {
      setCountPassanger((prev) => ({
        ...prev,
        children: prev.children + 1,
      }));
    } else if (
      e.target.id === "removeChildren" &&
      countPassanger.children > 0
    ) {
      setCountPassanger((prev) => ({
        ...prev,
        children: prev.children - 1,
      }));
    }
    // Adults
    if (e.target.id === "addAdults" && countPassanger.adults < 9) {
      setCountPassanger((prev) => ({
        ...prev,
        adults: prev.adults + 1,
      }));
    } else if (e.target.id === "removeAdults" && countPassanger.adults > 0) {
      setCountPassanger((prev) => ({
        ...prev,
        adults: prev.adults - 1,
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
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
        <BookAFlightContainer
          className="bookAFlight"
          sx={{ p: 3, bgcolor: COLORS.WHITE, paddingBottom: "30px" }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item sm={6} xs={12}>
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
              <Grid item sm={6} xs={12}>
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
                <Box sx={{ with: "100%" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <InputLabel>Depart Date (D-M-Y)</InputLabel>

                    <DatePicker
                      className="w-160"
                      clearable
                      format="DD-MM-YY"
                      defaultValue={dayjs(new Date())}
                      onChange={(e) =>
                        setData((prev) => ({ ...prev, flyDate: e.$d }))
                      }
                      name="FlyDate"
                    />
                  </LocalizationProvider>
                </Box>
              </Grid>
              {/* passangers */}

              <Grid
                item
                sm={3}
                xs={12}
                sx={{ position: "relative", left: 0, top: 0 }}
              >
                <InputLabel id="demo-simple-select-label">
                  Passengers
                </InputLabel>
                <Dropdown>
                  {countPassanger.children < 1 &&
                    countPassanger.infants < 1 && (
                      <CustomMenuButton
                        onClick={(e) =>
                          setData((prev) => ({
                            ...prev,
                            passangers: e.target.innerText,
                          }))
                        }
                      >
                        {countPassanger.adults} Adults -{" "}
                        {countPassanger.children} Children
                      </CustomMenuButton>
                    )}
                  {countPassanger.children > 0 && (
                    <CustomMenuButton
                      onClick={(e) =>
                        setData((prev) => ({
                          ...prev,
                          passangers: e.target.innerText,
                        }))
                      }
                    >
                      {countPassanger.adults} Adults - {countPassanger.children}{" "}
                      Children
                    </CustomMenuButton>
                  )}
                  {countPassanger.infants > 0 && (
                    <CustomMenuButton
                      onClick={(e) =>
                        setData((prev) => ({
                          ...prev,
                          passangers: e.target.innerText,
                        }))
                      }
                    >
                      {countPassanger.adults} Adults - {countPassanger.infants}{" "}
                      Infants
                    </CustomMenuButton>
                  )}{" "}
                  <MenuBox
                    className="menuBox"
                    style={{
                      background: COLORS.WHITE,
                      minWidth: 255,
                      margin: "0",
                    }}
                  >
                    <MenuItem
                      value="Adults"
                      sx={{
                        width: "100%",
                      }}
                    >
                      <PassengersBox>
                        <Box className="AgeCategory">
                          <Typography>Adults</Typography>
                          <span>From 12 Years</span>
                        </Box>
                        <Box className="valueAdd">
                          <ListItemIcon
                            onClick={handlePassangerCount}
                            id="addAdults"
                          >
                            <AddIcon fontSize="small" id="addAdults" />
                          </ListItemIcon>
                          <Typography>{countPassanger.adults}</Typography>
                          <ListItemIcon
                            onClick={handlePassangerCount}
                            id="removeAdults"
                          >
                            <RemoveIcon id="removeAdults" />
                          </ListItemIcon>
                        </Box>
                      </PassengersBox>
                    </MenuItem>
                    <MenuItem value="Children">
                      <PassengersBox>
                        <Box className="AgeCategory">
                          <Typography>Children</Typography>
                          <span>2 under 12-yrs</span>
                        </Box>
                        <Box className="valueAdd">
                          <ListItemIcon
                            onClick={handlePassangerCount}
                            id="addChildren"
                          >
                            <AddIcon fontSize="small" id="addChildren" />
                          </ListItemIcon>
                          <Typography>{countPassanger.children}</Typography>
                          <ListItemIcon
                            onClick={handlePassangerCount}
                            id="removeChildren"
                          >
                            <RemoveIcon fontSize="small" id="removeChildren" />
                          </ListItemIcon>
                        </Box>
                      </PassengersBox>
                    </MenuItem>
                    <MenuItem value="Infants">
                      <PassengersBox>
                        <Box className="AgeCategory">
                          <Typography>Infants</Typography>
                          <span>under 2 years</span>
                        </Box>
                        <Box className="valueAdd">
                          <ListItemIcon
                            onClick={handlePassangerCount}
                            id="addInfants"
                          >
                            <AddIcon fontSize="small" id="addInfants" />
                          </ListItemIcon>
                          <Typography>{countPassanger.infants}</Typography>
                          <ListItemIcon
                            onClick={handlePassangerCount}
                            id="addInfants"
                          >
                            <RemoveIcon fontSize="small" id="removeInfants" />
                          </ListItemIcon>
                        </Box>
                      </PassengersBox>
                    </MenuItem>
                  </MenuBox>
                </Dropdown>
              </Grid>
              {/* Class */}
              <Grid item sm={3} xs={12}>
                <InputLabel id="demo-simple-select-label">Class</InputLabel>

                <Select
                  sx={{ width: "100%" }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={data.flightClass}
                  onChange={handleChange}
                  name="flightClass"
                >
                  <MenuItem value={data.flightClass} sx={{ display: "none" }}>
                    {data.flightClass}
                  </MenuItem>
                  <MenuItem value="Economy">Economy</MenuItem>
                  <MenuItem value="Premium Economy">Premium Economy</MenuItem>
                  <MenuItem value="Business">Business</MenuItem>
                </Select>
              </Grid>
              <Grid item sm={3} xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "100%", marginTop: "36px", height: "55px" }}
                >
                  <SendTwoToneIcon /> &nbsp; Show Flights
                </Button>
              </Grid>
            </Grid>
          </form>
        </BookAFlightContainer>
      )}
    </div>
  );
}

const CustomMenuButton = styled(MenuButton)`
  width: 100%;
  min-height: 54px;
  font-size: 17px;
  text-align: left;
  padding-left: 10px;
  color: ${COLORS.GRAY1};
  background-color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.GRAY};
  border-radius: 5px;
`;

const MenuBox = styled(Menu)`
  ul {
    padding: 0 !important;
  }
`;

const BookAFlightContainer = styled(Box)`
  .iconBox {
    min-width: auto;
    margin-right: 5px;
  }

  label {
    font-family: ${FONTS.PRIMARY};
    font-weight: 500;
    display: inline-block;
    margin-bottom: 10px;
    color: ${COLORS.GRAY1};
  }
`;

const PassengersBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: auto;

  .AgeCategory span {
    font-size: 14px;
    font-weight: 500;
    color: ${COLORS.GRAY};
  }

  .valueAdd {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .valueAdd .MuiListItemIcon-root {
    justify-content: center;
  }

  .valueAdd p {
    color: #000000;
    font-weight: bold;
  }
  .valueAdd p:nth-child(2) {
    padding: 0px 7px;
  }
`;

export default BookAFlight;
