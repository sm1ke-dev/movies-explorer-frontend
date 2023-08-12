import React from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  isLoggedIn: boolean;
  outlet: JSX.Element;
};

function ProtectedRouteElement({ isLoggedIn, outlet }: ProtectedRouteProps) {
  return isLoggedIn ? outlet : <Navigate to="/" replace />;
}

export default ProtectedRouteElement;
