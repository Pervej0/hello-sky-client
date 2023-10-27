import {
  Alert,
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
  TextField,
  Typography,
} from "@mui/material";
import { COLORS, FONTS } from "../../../Styles/constants";
import { useEffect, useState } from "react";
import styled from "styled-components";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SendTwoToneIcon from "@mui/icons-material/SendTwoTone";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import dayjs from "dayjs";
import { useAuth } from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

function BookAFlight(props) {
  const { children, value, index, ...other } = props;
  const { user } = useAuth();
  const [showAlert, setShowAlert] = useState(false);

  const [data, setData] = useState({
    flightFrom: "",
    flightTo: props.arrival,
    flightClass: "Select Flight Type",
    passangers: "1 Adults - 0 Children",
    flyDate: dayjs(new Date()),
    fullName: user?.displayName || "",
    phoneNumber: "",
    email: user?.email || "",
  });
  const [countPassanger, setCountPassanger] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const navigate = useNavigate();

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
    if (!user) navigate("/login");
    data.status = "Active";
    setData(data);
    fetch("https://hello-sky-server.onrender.com/bookings", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setShowAlert(true);
          setInterval(() => {
            setShowAlert(false);
          }, 2000);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {showAlert && (
        <Alert severity="success">
          Your flight has been successfully booked.
        </Alert>
      )}
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
              <Grid container spacing={2}>
                <Grid item sm={6} xs={12}>
                  <InputLabel id="demo-simple-select-label">
                    Flying From
                  </InputLabel>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ListItemIcon className="iconBox">
                      <FlightTakeoffIcon sx={{ paddingRight: "5px" }} />
                    </ListItemIcon>
                    <TextField
                      sx={{ width: "100%", border: 0 }}
                      labelid="Flying From"
                      id="demo-simple-select"
                      value={data.flightFrom}
                      placeholder="Enter Departure City"
                      onChange={handleChange}
                      name="flightFrom"
                    />
                  </Box>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <InputLabel id="demo-simple-select-label">
                    Flying to
                  </InputLabel>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <ListItemIcon className="iconBox">
                      <FlightLandIcon />
                    </ListItemIcon>
                    <TextField
                      sx={{ width: "100%", border: "0px" }}
                      labelid="demo-simple-select-label"
                      id="demo-simple-select"
                      value={data.flightTo}
                      placeholder="Enter Arrival City"
                      onChange={handleChange}
                      name="flightTo"
                    />
                  </Box>
                </Grid>
                {/* personal info */}
                <Grid item sm={4} xs={12}>
                  <InputLabel id="demo-simple-select-label">
                    Full Name
                  </InputLabel>
                  <TextField
                    sx={{ width: "100%", border: "0px" }}
                    labelid="demo-simple-select-label"
                    id="demo-simple-select"
                    value={data.fullName}
                    placeholder="Enter Name"
                    onChange={handleChange}
                    name="fullName"
                  />
                </Grid>
                <Grid item sm={4} xs={12}>
                  <InputLabel id="demo-simple-select-label">
                    Phone Number
                  </InputLabel>
                  <TextField
                    sx={{ width: "100%", border: "0px" }}
                    labelid="demo-simple-select-label"
                    id="demo-simple-select"
                    value={data.phoneNumber}
                    placeholder="Enter Phone No"
                    onChange={handleChange}
                    name="phoneNumber"
                    required
                  />
                </Grid>
                <Grid item sm={4} xs={12}>
                  <InputLabel id="demo-simple-select-label">Email</InputLabel>
                  <TextField
                    sx={{ width: "100%", border: "0px" }}
                    labelid="demo-simple-select-label"
                    id="demo-simple-select"
                    type="email"
                    value={data.email || user?.email}
                    placeholder="Enter Email"
                    onChange={handleChange}
                    required
                    name="email"
                  />
                </Grid>
                {/* date */}
                <Grid item xs={12} sm={6} md={3}>
                  <Box sx={{ with: "100%" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <InputLabel>Depart Date (D-M-Y)</InputLabel>

                      <DatePicker
                        className="w-160"
                        clearable
                        format="DD-MM-YY"
                        defaultValue={data.flyDate}
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
                  xs={12}
                  sm={6}
                  md={3}
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
                        {countPassanger.adults} Adults -{" "}
                        {countPassanger.children} Children
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
                        {countPassanger.adults} Adults -{" "}
                        {countPassanger.infants} Infants
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
                              <RemoveIcon
                                fontSize="small"
                                id="removeChildren"
                              />
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
                <Grid item xs={12} sm={6} md={3}>
                  <InputLabel id="demo-simple-select-label">Class</InputLabel>

                  <Select
                    sx={{ width: "100%" }}
                    labelid="demo-simple-select-label"
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
                <Grid item xs={12} sm={6} md={3}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: "100%", marginTop: "36px", height: "55px" }}
                  >
                    <SendTwoToneIcon /> &nbsp; Book A Flight
                  </Button>
                </Grid>
              </Grid>
            </form>
          </BookAFlightContainer>
        )}
      </div>
    </>
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

  @media only screen and (max-width: 600px) {
    .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
      width: 100%;
    }
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
