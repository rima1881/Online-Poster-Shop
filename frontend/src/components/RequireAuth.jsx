import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    

    return (
        allowedRoles.includes(auth.roles)
            ? <Outlet />
            : <Navigate to="/" state={{ from: location }} replace />
    );
}

export default RequireAuth;