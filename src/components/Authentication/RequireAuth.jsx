import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts";

export const RequireAuth = () => {
    const location = useLocation();
    const { authState: { authToken } } = useAuth();
    return authToken ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={location.pathname} replace />
    );
};
