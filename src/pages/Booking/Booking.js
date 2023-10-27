import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container } from "@mui/material";
import { useAuth } from "../../Hooks/useAuth";
import styled from "styled-components";
import { COLORS, FONTS } from "../../Styles/constants";

const Booking = () => {
  const [myBookingData, setMyBookingData] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://hello-sky-server.onrender.com/bookings/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyBookingData(data));
  }, [myBookingData]);

  const handleDelete = (id) => {
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

  return (
    <MainContainer sx={{ mt: 3 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Passangers</TableCell>
              <TableCell align="right">Fly Date</TableCell>
              <TableCell align="right">Booking Status</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myBookingData.map((item, index) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{item.fullName}</TableCell>
                <TableCell align="right">{item.phoneNumber}</TableCell>
                <TableCell align="right">{item.passangers}</TableCell>
                <TableCell align="right">
                  {item?.flyDate.substr(0, 10)}
                </TableCell>
                <StatusTableCell align="right" status={item.status}>
                  {item?.status}
                </StatusTableCell>
                <TableCell align="right">
                  <Button
                    type="button"
                    sx={{ color: "red" }}
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
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

export default Booking;
