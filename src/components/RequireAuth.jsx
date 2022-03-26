import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

const RequireAuth = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (isLoggedIn && <Outlet />) || <Navigate to="/login" />;
};

export default RequireAuth;
