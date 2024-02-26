import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ ...props }) => {
  const isAuthenticated = sessionStorage.getItem("token") !== null;

  if (isAuthenticated) {
    return <Navigate to="/profile" />;
  } 
  
  
  return <Route {...props} />;
};

export default PrivateRoute;
