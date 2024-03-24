import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import rootReducer from './redux/rootReducer'; 
import { createStore } from 'redux'; 
import Content from './components/Content';
import Layuot from './components/Layout';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import { useTheme } from './components/ThemeContext';
import './App.css';
import AboutPage from './components/AboutPage';


const store = createStore(rootReducer);

function App() {
  const { theme } = useTheme(); 
  return (
    <Provider store={store}>
      <Router>
        <div key={theme} className={`App ${theme}`}>
          <Header />
          <Layuot />
          <Routes>
            <Route path="/" exact component={<Content />} />
            <Route path="/about" component={<AboutPage />} /> 
          </Routes>
          <Menu />
          <Content />
          <Footer /> 
        </div>
      </Router>
    </Provider>
  );
}

export default App;
