
import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Buttons from './Pages/Buttons';
import Cards from './Pages/Cards';
import Borders from './Pages/Borders';
import Animations from './Pages/Animations';
import Others from './Pages/Others';
import Login from './Pages/Login';
import Forgot from './Pages/Forgot';
import Dashboard from './Pages/Dashboard';
import Colors from './Pages/Colors';




function App() {



  return (
        
      <div className="App">

        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>

          <Route path="/buttons" element={<Buttons/>}/>

          <Route path="/cards" element={<Cards/>}/>

          <Route path="/colors" element={<Colors/>}/>

          <Route path="/borders" element={<Borders/>}/>

          <Route path="/animations" element={<Animations/>}/>

          <Route path="/others" element={<Others/>}/>

          <Route path="/login" element={<Login/>}/>

          <Route path="/forgot" element={<Forgot/>}/>

        </Routes>


      </div>
  ); 
}


export default App;







