import { React, useEffect, useState } from 'react';
import styles from '../../styles/login.module.css';
import { instance, url } from '../../API/axios';
import axios from 'axios';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import { useDispatch, useSelector } from 'react-redux';
import { logInAction, logOutAction } from '../../store/actions';
import { useHistory } from 'react-router-dom';
function SignIn() {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { isLoggedIn, user } = useSelector((state) => state.authReducer);

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

  // log-in handler/ on submit
  async function logInHandler(e) {
    e.preventDefault();
    try {
      console.log('loginData', loginData);
      const response = await axios.post(
        `${url}/signin`,
        {},
        {
          auth: { username: loginData.email, password: loginData.password },
        }
      );
      cookie.save('token', response.data.token);
      const token = cookie.load('token');
      validateToken(token);
      e.target.reset();
      setLoginData({});
      response.data.user.role == 'admin' ? history.push('/admin') : history.push('/');
      response.data.user.role == 'user' ? history.push('/customer') : history.push('/');
    } catch (error) {
      console.log('Log-in error', error.message);
    }
  }

  // onChange handler
  function onChangeHandler(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }
  return (
    <div className={styles.bigContainer}>
      <form className={styles.form} onSubmit={logInHandler}>
        <fieldset className={styles.fieldset}>
          <legend>Login :</legend>

          <label>Email: </label>
          <input className={styles.field} type='email' placeholder='email' name='email' onChange={onChangeHandler} />
          <label>Password: </label>
          <input className={styles.field} type='password' placeholder='password' name='password' onChange={onChangeHandler} />
          <button className={styles.button}>Login</button>
          <div>
            <p className={styles.signupMsg}>don't have an account? sign-up please..</p>
            <button className={styles.button} onClick={() => history.push('/signup')}>
              Sign-Up
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default SignIn;
