//import logo from './logo.svg';
import React, {useEffect} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Amplify from 'aws-amplify';
import {Auth} from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react'; // or 'aws-amplify-react-native';



Amplify.configure({
  Auth: {
    identityPoolID:'ap-northeast-1:d0430b41-c872-4a5d-8731-bc730ea0002a',
    region: 'ap-northeast-1',
    userPoolId: 'ap-northeast-1_FZo5CAMFy',
    userPoolWebClientId:'4860gpqhn5prvn20jop851le1n'
    
  }
});

const configureObject = Auth.configure();
console.log(configureObject);

function App() {
  const [currentUserName, setCurrentUserName] = React.useState("");
  useEffect(() => {
    const init = async() => {
      const currentUser = await Auth.currentAuthenticatedUser();
      setCurrentUserName(currentUser.username);
    }
    init()
  },[]);

  const signOut = async() => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
    document.location.reload();
  }

  return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
        //  Edit <code>src/App.js</code> and sa.
        //</p>
        /*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>*/
    //  </header>
   // </div>
    <div>
      <h1>{currentUserName}, hello!!</h1>
      <Button onClick={signOut}>SignOut!!!</Button>
    </div>

  );
}

//export default App;
export default withAuthenticator(App);