import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import ComingSoon from './components/ComingSoon';
//import {getArticles} from './api/api';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
   <div>
      <Routes>
      <Route path="/" element={<ComingSoon />} />
      <Route path="/articles" element={<Home />} />
      </Routes>
    </div>
  </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
