import React, { useState } from 'react'
import { useFirebase } from '../context/Firebase';

// const auth = getAuth(app);

function SignUpPage() {
    const firebase = useFirebase();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='signup-page'>
            <header>Sign Up Page</header>
            <br />
            <label>Email</label> :
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Enter your email here' />
            <label>Password</label> :
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Enter your password here' />
            <br />
            <button onClick={() => firebase.signUpUserWithEmailAndPassword(email, password)}>Sign Up</button>
        </div>
    )
}

export default SignUpPage
