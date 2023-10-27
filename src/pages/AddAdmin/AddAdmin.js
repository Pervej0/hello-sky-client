import {
  Alert,
  Box,
  Button,
  Container,
  InputLabel,
  NativeSelect,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, FONTS } from "../../Styles/constants";

const AddAdmin = () => {
  const [userRole, setUserRole] = useState({
    email: "",
    role: "",
  });
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserRole((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://hello-sky-server.onrender.com/admin", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(userRole),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setSuccessAlert(true);
          setInterval(() => {
            setSuccessAlert(false);
          }, 2000);
        }
        if (!data.acknowledged) {
          setErrorAlert(true);
          setInterval(() => {
            setErrorAlert(false);
          });
        }
      });
    setUserRole({
      email: "",
      role: "",
    });
    e.target.reset();
  };

  return (
    <MainContainer sx={{ mt: 3 }}>
      <Typography variant="h5" sx={{ textAlign: "center", my: 2, mb: 4 }}>
        Create An Admin
      </Typography>
      {successAlert && (
        <Alert sx={{ my: 2 }} severity="success">
          {userRole.role} role successfully added!
        </Alert>
      )}
      {errorAlert && (
        <Alert sx={{ my: 2 }} severity="error">
          Something error occurs! It might user do not exist.
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <InputLabel id="demo-simple-select-label">Enter Admin Email</InputLabel>
        <Box sx={{ mb: 3, mt: 1 }}>
          <TextField
            sx={{ width: "100%" }}
            labelid="Flying From"
            type="email"
            id="demo-simple-select"
            value={userRole.email}
            placeholder="Email"
            required
            onChange={handleChange}
            name="email"
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <NativeSelect
            defaultValue={10}
            inputProps={{
              name: "role",
              id: "uncontrolled-native",
            }}
            onChange={handleChange}
          >
            <option value={10} disabled>
              Change Role
            </option>
            <option value="Admin">Admin</option>
            <option value="Moderator">Moderator</option>
            <option value="User">User</option>
          </NativeSelect>
        </Box>
        <UpdateButton type="submit" variant="contained">
          Update Role
        </UpdateButton>
      </form>
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  input,
  label {
    font-family: ${FONTS.SECONDARY};
    color: ${COLORS.WHITE};
    ::placeholder {
      color: ${COLORS.WHITE} !important;
    }
  }

  select {
    color: ${COLORS.WHITE};
    border-bottom: 1px solid ${COLORS.WHITE};
    outline: 0;
    option:not(:first-child) {
      color: ${COLORS.BLACK};
    }
  }

  input {
    border: 1px solid ${COLORS.WHITE};
    outline-color: ${COLORS.WHITE};
    border-radius: 5px;
  }
  input:hover {
    border: 1px solid ${COLORS.WHITE};
  }
`;

const UpdateButton = styled(Button)`
  background: ${COLORS.WHITE} !important;
  color: ${COLORS.BLACK} !important;
  font-weight: 600 !important;
`;

export default AddAdmin;
