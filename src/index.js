import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'; 
import { ThemeProvider } from './components/ThemeContext';
import { Provider } from 'react-redux'; 
import store from './redux/rootReducer'; 
//const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider> 
        <App />
      </ThemeProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
