import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import SettingsPage from '../SettingsPage/SettingsPage';
import SignInPage from '../SignInPage/SignInPage';
import EmergencyButton from '../../components/EmergencyButton/EmergencyButton';
import EmergencyPage from '../EmergencyPage/EmergencyPage';
import AdminPortalPage from '../AdminPortalPage/AdminPortalPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <>
    <main className="App">
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/sign-in">
              <SignInPage user={user} setUser={setUser}/>
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/settings">
              <SettingsPage />
            </Route>
            <Route path="/emergency">
              <EmergencyPage />
            </Route>
            <Route path="/admin">
              <AdminPortalPage />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </> 
    </main>
    <footer>
      <EmergencyButton />
    </footer>
    </>
  );
}