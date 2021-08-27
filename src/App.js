import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Jennie och Andreas Pipeline lyckades!</p>
        <a
          className="App-link"
          href="https://urplay.se"
          target="_blank"
          rel="noopener noreferrer"
        >
          urplay
        </a>
      </header>
    </div>
  );
}

export default App;
