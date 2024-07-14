import logo from './logo.svg';
import './App.css';
import {useCount} from 'tenenger7125-npm-publish-cra-esbuild'

function App() {
  const {count, increase} = useCount(0);

  console.log(count, increase)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
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
