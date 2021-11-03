import { React, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './styles/app.module.css';
import Home from './components/home/Home';
import Admin from './components/admin/Admin';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signUp/SignUp';
import CustomerProfile from './components/customer/CustomerProfile';
import Header from './components/header/Header';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import { useDispatch, useSelector } from 'react-redux';
import { logInAction, logOutAction } from './store/actions';

function App() {
  const dispatch = useDispatch();

  //  did-mount
  useEffect(() => {
    // get the token from the browser cookies
    const token = cookie.load('token');
    validateToken(token);
  }, []);

  // validateToken
  function validateToken(token) {
    // check the token in cookies
    if (token !== 'null') {
      // decode the token to get the user info
      const user = jwt.decode(token);
      console.log(token, user);
      // check if the user exists or not
      if (user) {
        // if he is a valid user, make him logged in
        dispatch(logInAction(user));
      }
    } else {
      // otherwise, loggedout and clear the cookies
      dispatch(logOutAction());
    }
  }
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/admin'>
          <Admin />
        </Route>
        <Route path='/customer'>
          <CustomerProfile />
        </Route>
        <Route path='/login'>
          <SignIn />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
