import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hello anh em!!! Vua cai xong customize-cra</p>
        <p>
          Cài thêm thằng này: babel-plugin-module-resolver
        </p>
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
