import { Navigate } from 'react-router-dom';
import { useAuth } from '@/features/auth/auth.context';

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}