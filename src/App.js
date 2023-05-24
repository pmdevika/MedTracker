import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Createacount from './components/createacount';
import Profile from './components/profile';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3002'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createacount" element={<Createacount />} />
          <Route path="/profile" element={<Profile />} /> 
          {/* <h1>haii</h1> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
