import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/Home';
import CurrentPint from './components/CurrentPint';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
   <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pint" element={<CurrentPint/>} />
      </Routes>
    </div>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
