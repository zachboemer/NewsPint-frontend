import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  './assets/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
  // <Router>
  //  <div>
  //     <Routes>
  //     <Route path="/" element={<Home />} />
  //     <Route path="/pint" element={<CurrentPint/>} />
  //     </Routes>
  //   </div>
  // </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
