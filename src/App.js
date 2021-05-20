import React, { useEffect } from 'react';
import HomeScreen from './components/screens/HomeScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import './App.css';
import LoginScreen from './components/screens/LoginScreen';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/counter/userSlice';
import ProfileScreen from './components/screens/ProfileScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
   const unsubscribe =   auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
       dispatch(login({
         uid: userAuth.uid,
         email: userAuth.email,
       }))
      } else{
        dispatch(logout());
      }
    });

    return unsubscribe
  },[dispatch])

  return (
    <div className="app">
    
      <Router>
        {!user? (

        <LoginScreen/>
        ):(
          <Switch>
          <Route path='/profile'>
             <ProfileScreen />
          </Route>
          <Route path='/'>
            <HomeScreen />
          </Route>
        </Switch>
         ) }
        
      </Router>
    </div>
  );
}

export default App;
