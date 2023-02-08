import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/Home';
import CurrentPint from './components/CurrentPint';
import NavBar from './components/Navbar';
import AboutPage from './components/AboutPage';


function App() {
    return (
      <>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pint" element={<CurrentPint/>} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Router>
        </>
    );
  }
  
  export default App;