import React from 'react';
import './App.css';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import IndividualIntervalsExample from './carosuel.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './Courses.js';
import Features from './Features.js';
import Coperatevideo from './Coperate-video.js';
import Training from './Training.js';


const App = () => {
  return (
    <div>
      < Home />
      <IndividualIntervalsExample/>
      <Courses/>
      <Features/>
      <Coperatevideo/>
      <Training/>
      <AboutUs/>
    </div>
  );
};

export default App;