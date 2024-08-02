import { Navigate } from "react-router-dom";
import { useAuthProvider } from "../../context/authProvider";

export default function PrivateRoute({Component}) {
    const { currentUser } = useAuthProvider();
    return currentUser ? <Component /> : <Navigate to="/login" />;
}