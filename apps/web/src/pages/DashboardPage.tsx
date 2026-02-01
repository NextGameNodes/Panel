import { useAuthStore } from "@/features/auth/store/auth.store";
import { authService } from "@/features/auth/services/auth.service";

export function DashboardPage() {
  const user = useAuthStore((s) => s.user);

  return (
    <div>
      <h1>Welcome, {user?.email}</h1>
      <button onClick={authService.logout}>Logout</button>
    </div>
  );
}