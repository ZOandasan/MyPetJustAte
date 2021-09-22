import { useState } from 'react';
import * as userService from '../../utilities/users-service';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function SignInPage({user, setUser}){
    const [showLogin, setShowLogin] = useState(true);

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    if (user){
        return (
            <div>
                <h1>Account Information</h1>
                <h4>You're Signed In As</h4>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <button onClick= {() => handleLogOut()}>Log Out</button>
            </div>
        )
    } else {
        return (
            <main>
                {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
                <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up': 'Log In'}</button>
            </main>
        )
    }

}