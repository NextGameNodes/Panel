import { useEffect, useState } from 'react';
import { ServerStatus } from '@shared/types';

function App() {
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/status')
      .then(res => res.json())
      .then(data => {
        setStatus(data.status);
        setLoading(false);
      })
      .catch(err => {
        console.error('API error:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Game Panel</h1>

      {loading && <p>Ładowanie statusu API...</p>}

      {!loading && status && (
        <p>
          Status API:
          <strong style={{ marginLeft: 8 }}>
            {status}
          </strong>
        </p>
      )}
    </div>
  );
}

export default App;