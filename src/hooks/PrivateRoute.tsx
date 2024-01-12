import { Outlet, Navigate } from "react-router-dom";
import { UseAuthStatus } from "./UseAuthStatus";
import Spinner from "../components/Spinner";

export const PrivateRoute: React.FC = () => {
  const { loggedIn, checkingStatus } = UseAuthStatus();

  if (checkingStatus) {
    return <Spinner />
  }

  if (!loggedIn) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
};
