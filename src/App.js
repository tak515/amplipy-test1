import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Amplify from 'aws-amplify';
import Storage from 'aws-amplify';

Amplify.configure('./aws-exports.jp');
Storage.list('public/') // for listing ALL files without prefix, pass '' instead
    .then(result => console.log(result))
    .catch(err => console.log(err));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and sa.
        </p>
        /*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>*/
        
        <Button variant="contained">ボタンだよ！</Button>
      </header>
    </div>
  );
}

export default App;
