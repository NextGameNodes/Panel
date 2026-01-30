export async function fetchMe() {
  const token = localStorage.getItem('token');

  const res = await fetch('http://localhost:3000/api/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) {
    throw new Error('unauthorized');
  }

  return res.json();
}
