import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './components/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider> {/* Обертка App в провайдер контекста темы */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);