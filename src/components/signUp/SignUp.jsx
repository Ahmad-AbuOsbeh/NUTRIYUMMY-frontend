import React from 'react';
import styles from '../../styles/signup.module.css';
function SignUp() {
  return (
    <div className={styles.bigContainer}>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <legend>Sign-Up Form :</legend>
          <label>username: </label>
          <input className={styles.field} type='text' placeholder='your name' />
          <label>Email: </label>
          <input className={styles.field} type='email' placeholder='email' />
          <label>Password: </label>
          <input className={styles.field} type='password' placeholder='password' />
          <label>City: </label>
          <select className={styles.field} placeholder='City'>
            <option>Amman</option>
            <option>Zarqa</option>
            <option>Aqaba</option>
            <option>Irbid</option>
            <option>Ma'an</option>
            <option>Mafraq</option>
            <option>Salt</option>
            <option>Ajloun</option>
            <option>Jerash</option>
            <option>Al-Karak</option>
            <option>Tafielah</option>
            <option>Madaba</option>
          </select>
          <label>role: </label>
          <select className={styles.field} placeholder='role'>
            <option>Customer</option>
            <option>Admin</option>
          </select>
          <button className={styles.button}>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default SignUp;
