import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/features/auth/store/auth.store";

export function AuthGuard({ children }: { children: JSX.Element }) {
  const token = useAuthStore((s) => s.accessToken);

  if (!token) {
    // niezalogowany → login
    return <Navigate to="/login" replace />;
  }

  return children;
}