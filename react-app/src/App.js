import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './components/NavBar/index'
import { authenticate } from './store/session';
import MainPage from './components/MainPage';
import ProfilePage from './components/ProfilePage';
import SearchPage from './components/SearchResults';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate())
      setLoaded(true)
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact={true}>
          <MainPage />
        </Route>
        <Route path='/profiles/:id' exact={true}>
          <ProfilePage />
        </Route>
        <Route path='/search' exact={true}>
          <SearchPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
