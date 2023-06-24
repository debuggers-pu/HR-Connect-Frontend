import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("token")) {
    return children;
  }
  return <Navigate to={"/auth/signin"} />;
};

export default ProtectedRoutes;
