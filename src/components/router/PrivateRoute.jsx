import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext.jsx";
import { LOGIN } from "../../config/routes/paths.js";

function PrivateRoute() {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to={LOGIN} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PrivateRoute;
