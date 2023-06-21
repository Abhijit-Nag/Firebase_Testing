import { useEffect } from 'react';
import './App.css';
import { signInWithGoogle } from './firebaseConfig';

function App() {
  // const email=localStorage.getItem("email");
 
  console.log(process.env.REACT_APP_SECRET_KEY);
  
  return (
    <div className='container'>
      <h1>Google Authentication</h1>
      <button onClick={signInWithGoogle} >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" alt="icon" />
        Sign in Google</button>

      <span>{localStorage.getItem("name")}</span>
      <span>{localStorage.getItem("email")}</span>
      <img src={localStorage.getItem("profilePic")} alt="profilePic" />
    </div>
  );
}

export default App;
