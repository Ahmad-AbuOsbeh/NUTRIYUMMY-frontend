import { React, useState, useEffect } from 'react';
import styles from '../../styles/signup.module.css';
import { instance, url } from '../../API/axios';
import axios from 'axios';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
import { useDispatch, useSelector } from 'react-redux';
import { logInAction, logOutAction } from '../../store/actions';
import { useHistory } from 'react-router-dom';

function SignUp() {
  const [userData, setUserData] = useState({ city: 'Amman', role: 'user' });
  const dispatch = useDispatch();
  const history = useHistory();

  // validateToken
  function validateToken(token) {
    // check the token in cookies
    if (token !== 'null') {
      // decode the token to get the user info
      const user = jwt.decode(token);
      console.log(token, user);
      user.token = token;

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
  // signUpHandler
  async function signUpHandler(e) {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/signup`, userData);
      // save the token in cookie
      cookie.save('token', response.data.token);
      const token = cookie.load('token');
      validateToken(token);
      e.target.reset();
      setUserData({});
      response.data.user.role == 'admin' ? history.push('/admin') : history.push('/');
      response.data.user.role == 'user' ? history.push('/customer') : history.push('/');
    } catch (error) {
      console.log('error', error);
    }
  }

  // on Change handler
  function onChangeHandler(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }
  return (
    <div className={styles.bigContainer}>
      <form className={styles.form} onSubmit={signUpHandler}>
        <fieldset className={styles.fieldset}>
          <legend>Sign-Up Form :</legend>
          <label>username: </label>
          <input className={styles.field} type='text' placeholder='your name' name='username' onChange={onChangeHandler} />
          <label>Email: </label>
          <input className={styles.field} type='email' placeholder='email' name='email' onChange={onChangeHandler} />
          <label>Password: </label>
          <input className={styles.field} type='password' placeholder='password' name='password' onChange={onChangeHandler} />
          <label>City: </label>
          <select className={styles.field} placeholder='City' defaultValue='Amman' name='city' onChange={onChangeHandler}>
            <option value='Amman'>Amman</option>
            <option value='Zarqa'>Zarqa</option>
            <option value='Aqaba'>Aqaba</option>
            <option value='Irbid'>Irbid</option>
            <option value="Ma'an">Ma'an</option>
            <option value='Mafraq'>Mafraq</option>
            <option value='Salt'>Salt</option>
            <option value='Ajloun'>Ajloun</option>
            <option value='Jerash'>Jerash</option>
            <option value='Al-Karak'>Al-Karak</option>
            <option value='Tafielah'>Tafielah</option>
            <option value='Madaba'>Madaba</option>
          </select>
          <label>role: </label>
          <select className={styles.field} placeholder='role' name='role' onChange={onChangeHandler}>
            <option value='user'>Customer</option>
            <option value='admin'>Admin</option>
          </select>
          <button className={styles.button}>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default SignUp;
