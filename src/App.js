import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './styles/app.module.css';
import Home from './components/home/Home';
import Admin from './components/admin/Admin';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signUp/SignUp';
import CustomerProfile from './components/customer/CustomerProfile';
import Header from './components/header/Header';
function App() {
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
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
