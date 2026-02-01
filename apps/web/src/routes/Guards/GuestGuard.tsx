import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/features/auth/store/auth.store";

export function GuestGuard({ children }: { children: JSX.Element }) {
  const token = useAuthStore((s) => s.accessToken);

  if (token) {
    // zalogowany? przekieruj do dashboard
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}