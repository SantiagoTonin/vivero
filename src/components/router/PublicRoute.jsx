import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext.jsx";
import { HOME } from "../../config/routes/paths.js";

function PublicRoute() {
  const { isAuthenticated } = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={HOME} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PublicRoute;
