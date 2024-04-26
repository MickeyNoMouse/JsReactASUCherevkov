import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux'; 


import Layout from './components/Layout';
import { useTheme } from './components/ThemeContext';
import './App.css';
import { AboutPage } from './components/AboutPage';
import { HomePage } from './components/HomePage';
import Form from './components/Form';

import { incrementCounter } from './redux/actions';

import Menu from './components/Menu'; 

function App() {
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useTheme(); 
  const [menuOpen, setMenuOpen] = useState(false);
  
  const c = useSelector(store=>store.rootReducer.counter.count);
  console.log(c);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen); 
  };
  
  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme} className="theme-toggle">Изменить тему</button>
      <button onClick={handleMenuToggle}>Открыть меню</button> 
      <button onClick={()=> dispatch(incrementCounter())}>кнопка</button>
      <p>{c}</p>
      
      <Router>
        <Layout />
        <Routes>
          <Route path="/HomePage" element={<HomePage />} /> 
          <Route path="/AboutPage" element={<AboutPage />} /> 
        </Routes>
        <Form />
 
        <Menu open={menuOpen} onClose={handleMenuToggle} /> 
      </Router>
    </div>
  );
}

export default App;
