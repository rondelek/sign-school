import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Kids from '../Kids/Kids';
import Adults from '../Adults/Adults';
import LessonFirst from '../LessonFirst/LessonFirst';
import Why from '../Why/Why';
import LessonSecond from '../LessonSecond/LessonSecond';
import Footer from '../Footer/Footer';
import Pricing from '../Pricing/Pricing'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Pricing/>
      <Adults/>
      <Kids/>
      <LessonFirst/>
      <Why/>
      <LessonSecond/>
      <Footer/>
    </div>
  );
}

export default App;
