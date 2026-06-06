import { APP_CONFIG } from './config.js';

document.documentElement.setAttribute('data-app', APP_CONFIG.nome.toLowerCase());

console.info(`[Mercadolar] ${APP_CONFIG.nome} — ${APP_CONFIG.slogan}`);
