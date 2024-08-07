import { Navigate } from 'react-router-dom';
import { useAuthProvider } from '../../context/authProvider';
import Loader from '../loader/Loader';

export default function RedirectAuthenticatedRoute({ Component }) {
  const { currentUser, loading } = useAuthProvider();

  if (loading) {
    return <Loader />;
  }

return !currentUser ? <Component/> : <Navigate to="/account" />;
}
