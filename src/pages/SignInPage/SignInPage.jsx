
import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function SignInPage({user, setUser}){
    const [showLogin, setShowLogin] = useState(true);

    if (user){
        return (
            <div>
                <h1>Account Information</h1>
                <h4>You're Signed In As</h4>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
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