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

const Booking = () => {
  const [myBookingData, setMyBookingData] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/bookings/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyBookingData(data));
  }, [myBookingData]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
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
    <Container sx={{ mt: 3 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Passangers</TableCell>
              <TableCell align="right">Fly Date</TableCell>
              <TableCell align="right">Bookin Status</TableCell>
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
                <TableCell align="right">{item?.status}</TableCell>
                <TableCell align="right">
                  <Button type="button" onClick={() => handleDelete(item._id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Booking;
