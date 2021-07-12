import React, { useEffect, useState }  from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { ComputersScreen } from '../components/computers/ComputersScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import {LoadingPage} from '../components/ui/LoadingPage'

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [ checking, setChecking ] = useState(true);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);



  useEffect(() => {
      
      firebase.auth().onAuthStateChanged( async(user) => {

          if ( user?.uid ) {
              dispatch( login( user.uid, user.displayName ) );
              setIsLoggedIn( true );
              // dispatch( startLoadingNotes( user.uid ) );

          } else {
              setIsLoggedIn( false );
          }

          setChecking(false);

      });
      
  }, [ dispatch, setChecking, setIsLoggedIn ])


  if ( checking ) {
      return (
        <LoadingPage/>
      )

      }

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path= "/auth/login" component ={ LoginScreen }/>
            <Route exact path= "/auth/register" component ={ RegisterScreen }/>
            <Route path= "/" component ={ DashboardRoutes }/>
            <PrivateRoute
              exact
              path="/auth/register"
              isAuthenticated={isLoggedIn}
              component={ ComputersScreen }
            >   
            </PrivateRoute>
         
            <Redirect to="/"/>
          </Switch>
        </div>
      </Router>
    )
}

