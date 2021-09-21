
import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function SignInPage(){
    const [showLogin, setShowLogin] = useState(true);

    if (user){
        return (
            <></>
        )
    } else {
        return (
            <main>
                <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up': 'Log In'}</button>
                {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
            </main>
        )
    }

}