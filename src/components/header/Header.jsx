import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/header.module.css';
import TopBar from './TopBar';
import logo from '../../images/large_nutriyummy.png';
function Header() {
  return (
    <div className={styles.bigHeader}>
      <TopBar />
      <div className={styles.header}>
        <div>
          <img src={logo} alt='' className={styles.logo} />
        </div>
        <div className={styles.nav}>
          <Link to='/' className={styles.link}>
            Home
          </Link>
          <Link to='/admin' className={styles.link}>
            Admin
          </Link>
          <Link to='/customer' className={styles.link}>
            Customer
          </Link>
          <Link to='/login' className={styles.link}>
            Login
          </Link>
          <Link to='/signup' className={styles.link}>
            Sign-up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
