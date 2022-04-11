import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import React,{useState} from 'react';
import Home from './pages/home/Home';
import Crew from './pages/crew/Crew';
import Destination from './pages/destination/Destination';
import Technology from './pages/technology/Technology';
import NotFound from './pages/notFound/NotFound';
import Navbar from './components/navbar/Navbar';

function App() {

  
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} /> 
        <Route path='/crew' element={<Crew />} /> 
        <Route path='/technology' element={<Technology />} />
        <Route path='*' element={<NotFound />} /> 
      </Routes>
      
    </div>
  );
}

export default App;
