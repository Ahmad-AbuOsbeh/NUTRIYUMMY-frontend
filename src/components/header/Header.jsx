import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/header.module.css';
import TopBar from './TopBar';
import logo from '../../images/large_nutriyummy.png';
import { useSelector, useDispatch } from 'react-redux';
import { If, Then, Else } from 'react-if';
import { logOutAction } from '../../store/actions';
import { useHistory } from 'react-router-dom';
import cookie from 'react-cookies';

function Header() {
  const { isLoggedIn, user } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  // logOutHandler
  function logOutHandler() {
    cookie.remove('token');
    dispatch(logOutAction());
    history.push('/');
    window.location.href = '/';
  }
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
          <If condition={user?.role == 'admin'}>
            <Then>
              <Link to='/admin' className={styles.link}>
                Admin
              </Link>
            </Then>
          </If>
          <If condition={user?.role == 'user'}>
            <Link to='/customer' className={styles.link}>
              Customer
            </Link>
          </If>
          <If condition={!isLoggedIn}>
            <Then>
              <Link to='/login' className={styles.link}>
                Login
              </Link>
              <Link to='/signup' className={styles.link}>
                Sign-up
              </Link>
            </Then>
          </If>
          <If condition={isLoggedIn}>
            <span className={`${styles.link} ${styles.logout}`} onClick={logOutHandler}>
              Log-out
            </span>
          </If>
        </div>
      </div>
    </div>
  );
}

export default Header;
