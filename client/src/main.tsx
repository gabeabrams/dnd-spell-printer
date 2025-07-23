import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { AppWrapper, initClient } from 'dce-reactkit';

// Import bootstrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import App from './App.tsx';
import './styles/shared.scss';

initClient({
  noServer: true,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWrapper>
      <App />
    </AppWrapper>
  </StrictMode>,
);
