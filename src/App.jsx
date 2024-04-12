import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux'; 
import rootReducer from './redux/rootReducer';


import Layout from './components/Layout';
import { useTheme } from './components/ThemeContext';
import './App.css';
import { AboutPage } from './components/AboutPage';
import { HomePage } from './components/HomePage';
import Form from './components/Form';

import { incrementCounter } from './redux/actions';






function App() {
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useTheme(); 
  
  const c = useSelector(store=>store.counter.count);
  console.log(c);

  
  
  return (
    
      <div className={`App ${theme}`}>
        <button onClick={toggleTheme} className="theme-toggle">Изменить тему</button>
        <button onClick={()=> dispatch(incrementCounter())}>кнопка</button>
        <p>{c}</p>
        
        <Router>
          <Layout />
          <Routes>
            <Route path="/HomePage" element={<HomePage />} /> 
            <Route path="/AboutPage" element={<AboutPage />} /> 
          </Routes>
          <Form />
          
        </Router>
      </div>
    
  );
}

export default App;