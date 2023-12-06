import { Outlet, Navigate} from "react-router-dom"

export const PrivateRoute: React.FC = () => {
   const isLoggedIn = false;
 
  return isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" />
}
