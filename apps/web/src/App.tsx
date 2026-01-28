import { useEffect, useState } from 'react';
import { ServerStatus } from '@shared/types';

function App() {
  const [status, setStatus] = useState<ServerStatus>();

  useEffect(() => {
    fetch('http://localhost:3000/health')
      .then(res => res.json())
      .then(data => setStatus(data.health))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Panel</h1>
      <p>Status serwera: {status}</p>
    </div>
  );
}

export default App;