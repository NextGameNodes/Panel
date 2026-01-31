import { useState } from 'react';
import { login } from './auth.api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('LOGIN SEND:', { email, password });

    try {
      const data = await login({ email, password });
      localStorage.setItem('token', data.accessToken);
      window.location.href = '/';
    } catch (err) {
      setError('Nieprawidłowe dane logowania');
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Login</h1>

      <form onSubmit={onSubmit}>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <input
          type="password"
          placeholder="hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit">Zaloguj</button>

        {error && <p>{error}</p>}
      </form>
    </div>
  );
}