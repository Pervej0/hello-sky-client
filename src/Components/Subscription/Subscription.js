import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  MenuItem,
  NativeSelect,
  TextField,
} from "@mui/material";
import React from "react";
import { COLORS, CustomButton, FONTS } from "../../Styles/constants";
import styled from "styled-components";
import ContentTitle from "../ContentTitle/ContentTitle";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const handleChange = () => {};

const handleSubmit = () => {};

const Subscription = () => {
  return (
    <div style={{ background: COLORS.BLACK1 }}>
      <Container sx={{ padding: "15px 0px", paddingBottom: "4rem" }}>
        <ContentTitle value="News & Subscription" color="white" />
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <SubscriptionList>
              <ListItem>
                <ListItemIcon sx={{ color: "white" }}>
                  <DoneAllIcon />
                </ListItemIcon>
                Hello Sky Abu Dhabi launches three weekly flights to Colombo
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: "white" }}>
                  <DoneAllIcon />
                </ListItemIcon>
                Hello Sky Abu Dhabi introduces new route to Lar in Iran{" "}
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: "white" }}>
                  <DoneAllIcon />
                </ListItemIcon>
                Hello Sky reports record second quarter net profit of AED 459
                million, up 187%{" "}
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: "white" }}>
                  <DoneAllIcon />
                </ListItemIcon>
                Hello Sky issues travel advisory to help customers during summer
                holiday rush
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: "white" }}>
                  <DoneAllIcon />
                </ListItemIcon>
                Hello Sky Egypt expands its route network in KSA with direct
                flights to Yanbu
              </ListItem>
            </SubscriptionList>
          </Grid>
          <Grid item sm={6} xs={12}>
            <SubscriptionForm
              style={{
                padding: "10px 35px",
              }}
              onSubmit={handleSubmit}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  alignItems: "center",
                  height: "100%",
                  width: "100%",
                  paddingLeft: "0",
                  marginLeft: "0",
                }}
              >
                <Grid item xs={2}>
                  <FormControl
                    onChange={handleChange()}
                    variant="outlined"
                    fullWidth
                  >
                    <CustomSelect
                      defaultValue={20}
                      inputProps={{
                        name: "age",
                        id: "uncontrolled-native",
                      }}
                    >
                      <option value={10}>Mister</option>
                      <option value={20}>Miss</option>
                      <option value={30}>Master</option>
                      <option value={40}>Mrs</option>
                    </CustomSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    sx={{ width: "100%" }}
                    type="text"
                    name="Name"
                    placeholder="Name here"
                    fullWidth
                  />
                </Grid>
                <TextField
                  sx={{ width: "100%", my: 3 }}
                  name="Email"
                  type="email"
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                />
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item sm={6} xs={12}>
                    <CustomSelect defaultValue="Country">
                      <option value={0} sx={{ display: "none" }}>
                        Country
                      </option>
                      <option value={0}>Co</option>
                      <option value={0}>Co</option>
                    </CustomSelect>
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <CustomSelect defaultValue="Language">
                      <option value={0} sx={{ display: "none" }}>
                        Language
                      </option>
                      <option value={0}>Bangla</option>
                      <option value={0}>Bangla</option>
                    </CustomSelect>
                  </Grid>
                </Grid>
              </Grid>

              <CustomButton variant="contained">Subscribe</CustomButton>
            </SubscriptionForm>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const SubscriptionList = styled.ul`
  font-size: 14px;
  li {
    color: ${COLORS.WHITE};
    font-family: ${FONTS.SECONDARY};
    font-size: 14px;
  }
`;

const SubscriptionForm = styled.form`
  .MuiGrid-root.MuiGrid-item.css-1o7apob-MuiGrid-root {
    padding-left: 0px;
  }

  input {
    background-color: ${COLORS.WHITE};
  }
`;

const CustomSelect = styled.select`
  width: 100%;
  padding: 15px 3px;
  font-size: 16px;
  border: 1px solid ${COLORS.GRAY};
  border-radius: 4px;
  outline-color: ${COLORS.BLUE1};
  font-family: ${FONTS.SECONDARY};
`;

export default Subscription;
