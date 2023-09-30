import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { FONTS } from "../../Styles/constants";

const ContentTitle = (props) => {
  return (
    <Container sx={{ my: 6 }}>
      <CustomBox>
        <Typography
          variant="h5"
          sx={{ color: props.color, borderBottom: `3px solid ${props.color}` }}
        >
          {props.value}
        </Typography>
      </CustomBox>
    </Container>
  );
};

const CustomBox = styled(Box)`
  text-align: left;
  h5 {
    display: inline-block;
    font-family: ${FONTS.PRIMARY};
    font-weight: 600;
    line-height: 2.5rem;
  }
`;

export default ContentTitle;
