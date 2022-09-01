import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Kids from '../Kids/Kids';
import Adults from '../Adults/Adults';
import LessonFirst from '../LessonFirst/LessonFirst';
import Why from '../Why/Why';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Kids/>
      <Adults/>
      <LessonFirst/>
      <Why/>
    </div>
  );
}

export default App;
