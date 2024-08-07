import { Navigate } from "react-router-dom";
import { useAuthProvider } from "../../context/authProvider";
import Loader from "../loader/Loader";

export default function PrivateRoute({ Component }) {
  const { currentUser, loading } = useAuthProvider();

  if (loading) {
    return <Loader />;
  }
  return currentUser ? <Component /> : <Navigate to="/login" />;
}
