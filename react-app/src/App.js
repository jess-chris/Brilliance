import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import TracksPage from './components/TracksPage/TracksPage';
import SpecificTrack from './components/SpecificTrack/SpecificTrack'
import TrackUploadForm from './components/TrackUpload/TrackUpload';
import HomePage from './components/HomePage/HomePage';
import User from './components/User';
import Comment from './components/Comments';
import { authenticate } from './store/session';
import AnnoModal from './components/AnnoModal/AnnoModal'
import EditTrackModal from './components/EditTrackModal/EditTrackModal'
import AnnoForm from './components/AnnoForm/AnnoForm';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);


  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AnnoModal />
      <EditTrackModal />
      <Switch>
        <Route path='/annotations/:id' exact={true}>
          <AnnoForm/>
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/tracks' exact={true}>
          <TracksPage/>
        </Route>
        <Route path='/tracks/new' exact={true}>
          <TrackUploadForm/>
        </Route>
        <Route path='/tracks/:trackId' exact={true}>
          <SpecificTrack/>
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <HomePage />
        </ProtectedRoute>
        <Route path='/comments' exact={true} >
          <Comment />
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
