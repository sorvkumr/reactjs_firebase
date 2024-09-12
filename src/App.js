import { getDatabase, ref, set } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './App.css';
import SignUpPage from './pages/SignUpPage';
import app from './Firebase'
import SignIn from './pages/SignIn';
import { useFirebase } from './context/Firebase';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <SignUpPage />
        <br />
        <SignIn />
      </header>

    </div>
  );
}

export default App;
