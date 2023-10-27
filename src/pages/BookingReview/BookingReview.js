import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { Container } from "@mui/material";
import styled from "styled-components";
import { COLORS, FONTS } from "../../Styles/constants";

const BookingReview = () => {
  const [bookingsData, setBookingsData] = useState([]);

  useEffect(() => {
    fetch("https://hello-sky-server.onrender.com/bookings")
      .then((res) => res.json())
      .then((data) => setBookingsData(data));
  }, [bookingsData]);

  const handleFlightStatus = (e, id) => {
    const value = e.target.value;
    if (value === 10) return;
    if (value === "Delete") {
      CallToDelete(id);
    }
    CallToStatusUpdate({ status: value }, id);
  };

  const CallToDelete = (id) => {
    fetch(`https://hello-sky-server.onrender.com/bookings/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const CallToStatusUpdate = (st, id) => {
    fetch(`https://hello-sky-server.onrender.com/bookings/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(st),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <MainContainer sx={{ mt: 3 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">S/N</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Fly Date</TableCell>
              <TableCell align="right">Booking Status</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookingsData.map((item, index) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{index}</TableCell>
                <TableCell align="right">{item.fullName}</TableCell>
                <TableCell align="right">{item.phoneNumber}</TableCell>
                <TableCell align="right">
                  {item?.flyDate.substr(0, 10)}
                </TableCell>
                <StatusTableCell align="right" status={item.status}>
                  {item.status}
                </StatusTableCell>
                <TableCell align="right">
                  <FormControl fullWidth>
                    <NativeSelect
                      defaultValue={10}
                      inputProps={{
                        name: "Booking Status",
                        id: "uncontrolled-native",
                      }}
                      onChange={(e) => handleFlightStatus(e, item._id)}
                    >
                      <option value={10}>Change Status</option>
                      <option value="Processing">Processing</option>
                      <option value="Confirm">Confirm</option>
                      <option value="Delete">Delete</option>
                    </NativeSelect>
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  table tr td {
    font-family: ${FONTS.SECONDARY};
    color: ${COLORS.BLACK};
  }
`;

const StatusTableCell = styled(TableCell)`
  color: ${({ status }) =>
    status === "Processing" ? COLORS.MAGENTA : COLORS.GREEN} !important;
  font-weight: 600 !important;
`;

export default BookingReview;
