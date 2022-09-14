import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Test from '../Test/Test';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AnimatedRoutes from '../AnimatedRoutes/AnimatedRoutes';

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <AnimatedRoutes/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
