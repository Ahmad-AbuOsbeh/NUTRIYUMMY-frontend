import React from 'react';
import styles from '../../styles/login.module.css';
function SignIn() {
  return (
    <div className={styles.bigContainer}>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <legend>Login :</legend>

          <label>Email: </label>
          <input className={styles.field} type='email' placeholder='email' />
          <label>Password: </label>
          <input className={styles.field} type='password' placeholder='password' />

          <button className={styles.button}>Login</button>
        </fieldset>
      </form>
    </div>
  );
}

export default SignIn;
