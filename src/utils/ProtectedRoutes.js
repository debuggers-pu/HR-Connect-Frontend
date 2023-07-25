import React from "react";
import { Redirect } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("token")) {
    return children;
  }

  return <Redirect to="/auth/signin" />;
};

export default ProtectedRoutes;
