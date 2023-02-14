import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/Home';
import CurrentPint from './components/CurrentPint';
import UnknownPage from './components/UnknownPage';
import NavBar from './components/Navbar';

function App() {
    return (
      <>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pint" element={<CurrentPint/>} />
              <Route path="/*" element={<UnknownPage/>} />
            </Routes>
          </Router>
        </>
    );
  }
  
  export default App;