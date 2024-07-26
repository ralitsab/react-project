import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authProvider";

export default function PrivateRoute({Component}) {
    const { currentUser } = useAuth();
    return currentUser ? <Component /> : <Navigate to="/login" />;
}