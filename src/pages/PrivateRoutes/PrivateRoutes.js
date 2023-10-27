import React from "react";
import { useAuth } from "../../Hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PrivateRoutes;
