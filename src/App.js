import './App.css';
import beer from './beer.svg'
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <div className="App">
    <header className="App-header">
        <img src={beer} className="App-logo" alt="logo" />
        <ComingSoon />
      </header>
      {/* <ComingSoon /> */}
    </div>
  );
}

export default App;
