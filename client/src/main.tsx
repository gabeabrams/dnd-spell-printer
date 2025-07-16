import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import bootstrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import App from './App.tsx';
import './styles/shared.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
