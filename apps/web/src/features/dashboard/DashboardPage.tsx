import { useAuth } from '@/features/auth/auth.context';

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Zalogowany jako: {user?.email}</p>

      <button
        onClick={logout}
        className="mt-4 bg-red-500 px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}