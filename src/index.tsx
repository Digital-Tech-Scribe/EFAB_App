import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './utils/performance'; // Import performance tracking

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);