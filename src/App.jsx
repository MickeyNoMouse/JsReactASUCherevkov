import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux'; 
import rootReducer from './redux/rootReducer'; 
import { createStore } from 'redux'; 

import Layout from './components/Layout';

import { useTheme } from './components/ThemeContext';
import './App.css';
import { AboutPage } from './components/AboutPage';
import { HomePage } from './components/HomePage';

const store = createStore(rootReducer);

function App() {
  const { theme } = useTheme(); 
  return (
    
    <Provider store={store}>
      <div key={theme} className={`App ${theme}`}>
      <Router>
          <Layout />
          <Routes>
          <Route path="/HomePage" element={<HomePage />} /> 
            <Route path="/AboutPage" element={<AboutPage />} /> 
          </Routes>

      </Router>
      </div>
    </Provider>
  );
}

export default App;