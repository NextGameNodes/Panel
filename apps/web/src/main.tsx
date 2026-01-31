import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProviders } from './app/Providers';
import App from './app/App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <section className='min-h-screen flex items-center justify-center font-mono bg-gradient-to-r from-stone-500 from-10% via-neutral-500 via-50% to-gray-500 to-100%'>
        <React.StrictMode>
            <AppProviders>
                <App />
            </AppProviders>
        </React.StrictMode>
    </section>
);