import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Pricing from '../Pricing/Pricing'
import Form from '../Form/Form';
import Test from '../Test/Test';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="form" element={<Form/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
