import React from "react";
import {Route, Routes} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import SingleRecipe from './pages/SingleRecipe';

import Navbar from './components/mainLayout/Navbar';
import Background from './components/mainLayout/Background';
import Hero from './components/mainLayout/Hero';

function App() {
  return (
    <>
        <Navbar/>
        <Background/>
        <Hero/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/recipe/:name" element={<SingleRecipe/>}/>
        </Routes>
    </>
  );
}

export default App;
