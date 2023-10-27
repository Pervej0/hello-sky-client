import React from "react";
import { useAuth } from "../../Hooks/useAuth";
import { Outlet, useNavigate } from "react-router-dom";

const AdminRoute = () => {
  const { userRole } = useAuth();
  const navigate = useNavigate();

  return userRole === "Admin" || userRole === "Moderator" ? (
    <Outlet />
  ) : (
    navigate(-1)
  );
};

export default AdminRoute;
