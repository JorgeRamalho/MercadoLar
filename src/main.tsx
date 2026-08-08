import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@css/style.css';
import { APP_CONFIG } from '@/config';
import App from './App';

document.documentElement.setAttribute('data-app', APP_CONFIG.nome.toLowerCase());

if (import.meta.env.DEV) {
  console.info(`[Mercadolar] ${APP_CONFIG.nome} — ${APP_CONFIG.slogan}`);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
