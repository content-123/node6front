
import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Registerr from './Registerr';
import Activate from './Activate';

function App() {
  return (
   
    <Routes>
  
        <Route path="/register" element={<Registerr/>} />
        <Route path="/activate/:token" element={<Activate/>} />
      
    </Routes>
  );
}

export default App;

