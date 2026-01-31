export async function fetcher(
  url: string,
  options: RequestInit = {}
) {
  const token = localStorage.getItem('token');

  const res = await fetch(`http://localhost:3000/api${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }

  return res.json();
}