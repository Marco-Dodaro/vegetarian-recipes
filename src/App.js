import React from "react";
import {Route, Routes} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import SingleRecipe from './pages/SingleRecipe';

import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';

function App() {
  return (
    <>
    <Navbar/>
    <Background/>
    <Hero/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipe/:slug" element={<SingleRecipe/>}/>
      </Routes>
    </>
  );
}

export default App;
