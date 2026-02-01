import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ canAccess, redirectPath = "/login" }) => {
  if (!canAccess) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
