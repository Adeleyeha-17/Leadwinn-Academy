import { Outlet, Navigate } from "react-router-dom";
import { UseAuthStatus } from "./UseAuthStatus";

export const PrivateRoute: React.FC = () => {
  const { loggedIn, checkingStatus } = UseAuthStatus();

  if (checkingStatus) {
    return <div>Loading...</div>;
  }

  if (!loggedIn) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
};
