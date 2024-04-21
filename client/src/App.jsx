import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage.jsx';
import Wiki from './page/Wiki.jsx';
import Disease from './page/Disease.jsx';
import Aboutus from './page/Aboutus.jsx';
import DetailWiki from './page/Detailwiki.jsx';
import DetailDisease from './page/DeatilDisease.jsx';
import DetailClan from './page/DetailClan.jsx';
import MachineLearning from './page/MachineLearning.jsx'


function App() {
  return (
    
    <Routes>
        <Route path="/"  element={<HomePage/>} />
        <Route path="/wiki"  element={<Wiki/>} />
        <Route path="/disease"  element={<Disease/>} />
        <Route path="/aboutus"  element={<Aboutus/>} />
        <Route path="/detailwiki/:id" element={<DetailWiki/>} />
        <Route path="/detaildisease/:id" element={<DetailDisease/>} />
        <Route path="/detailclan/:id" element={<DetailClan/>} />
        <Route path="/mlearning" element={<MachineLearning/>} />
    </Routes>
    
  );
}

export default App;
