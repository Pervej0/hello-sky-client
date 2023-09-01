import { Box, Typography } from "@mui/material";
import { COLORS } from "../../../Styles/constants";

function BookAFlight(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, bgcolor: COLORS.WHITE_LIGHT }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default BookAFlight;
