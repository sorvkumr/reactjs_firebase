import React, { useState } from 'react'
import { useFirebase } from '../context/Firebase';


function SignIn() {
    const firebase = useFirebase();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='signin-page'>
            <header>Sign In Page</header>
            <label>Email :</label>
            <input type='email' required placeholder='Enter your email here'
                value={email} onChange={(e) => setEmail(e.target.value)} />
            <label> Password : </label>
            <input type='password' required placeholder='Enter your password here'
                value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={() => firebase.signInUserWithEmailAndPassword(email, password)}>Log In</button>
        </div>
    )
}

export default SignIn
