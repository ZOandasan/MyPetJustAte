import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import SettingsPage from '../SettingsPage/SettingsPage';
import SignInPage from '../SignInPage/SignInPage';
import EmergencyPage from '../EmergencyPage/EmergencyPage';
import NavPage from '../NavPage/NavPage';
import ArticlesPage from '../ArticlesPage/ArticlesPage';
import SourcesPage from '../SourcesPage/SourcesPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [navMenu, setNavMenu] = useState(true);

  return ( 
    <div className='App'>
      <main className="app-main">
        { navMenu ? 
          <>
            <NavBar setNavMenu={setNavMenu}/>
            <Switch>
              <Route path="/home">
                <HomePage setNavMenu={setNavMenu}/>
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
              <Route path="/articles">
                <ArticlesPage />
              </Route>
              <Route path="/sources/:id">
                <SourcesPage />
              </Route>
              <Redirect to="/home" />
            </Switch>
          </>
          :
          <>
            <NavPage setNavMenu={setNavMenu}/>
          </>
          } 
      </main>
    </div>
  );
}