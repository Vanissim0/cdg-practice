import logo from './logo.svg';
// import './App.css';
// import './index.css';
import './tailwind.css';
import { Button } from './ui/atoms/button'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="shadow-3xl" alt="logo" /> */}
        < Button />
        <p className='gray '>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="blue"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
