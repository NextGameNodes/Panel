import { useEffect, useState } from 'react';
import { fetchMe } from './api/me';

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMe()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Ładowanie...</p>;

  if (!user) return <p>Nie jesteś zalogowany</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>User ID: {user.userId}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}