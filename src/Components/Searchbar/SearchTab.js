import React from "react";
import { Box, Container, Tab, Tabs } from "@mui/material";
import { COLORS } from "../../Styles/constants";
import styled from "styled-components";
import BookAFlight from "./TabPanels/BookAFlight";
import CheckIn from "./TabPanels/CheckIn";
import FlightStatus from "./TabPanels/FlightStatus";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SearchTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: "100%", marginTop: "60px" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            bgcolor: COLORS.WHITE,
          }}
        >
          <CustomTabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ justifyContent: "center" }}
          >
            <Tab label="Book a flight" {...a11yProps(0)} />
            <Tab label="Check in" {...a11yProps(1)} />
            <Tab label="Flight status" {...a11yProps(2)} />
          </CustomTabs>
        </Box>
        <BookAFlight value={value} index={0}>
          Item One
        </BookAFlight>
        <CheckIn value={value} index={1}>
          Item Two
        </CheckIn>
        <FlightStatus value={value} index={2}>
          Item Three
        </FlightStatus>
      </Box>
    </Container>
  );
};

const CustomTabs = styled(Tabs)`
  .css-heg063-MuiTabs-flexContainer {
    justify-content: center;
  }
`;

export default SearchTab;
