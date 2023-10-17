import logo from './logo.svg';
import './App.scss';
import "Access-Control-Allow-Origin"

function App() {
  return (
    <div ClassName="App">
      <header ClassName="App-header">
        <img src={logo} ClassName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          ClassName="App-link"
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
