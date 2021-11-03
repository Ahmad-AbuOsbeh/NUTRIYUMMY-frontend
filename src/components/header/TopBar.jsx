import React from 'react';
import styles from '../../styles/topBar.module.css';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import { GrLocation } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { Chip, Avatar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function TopBar() {
  const history = useHistory();
  const { isLoggedIn, user } = useSelector((state) => state.authReducer);

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.leftSide}>
          <LocalPhoneIcon className={styles.icon} />
          <p className={styles.phone}>+90 165 568 7894</p>
          <GrLocation className={styles.icon} />
          <p>Maromora Road, Washington, USA</p>
        </div>

        <div className={styles.rightSide}>
          {!isLoggedIn && (
            <button className={styles.button} onClick={() => history.push('/login')}>
              Get Started
            </button>
          )}
          {isLoggedIn && (
            <span className={styles.avatar}>
              <Chip avatar={<Avatar>{user.username.slice(0, 1).toUpperCase()}</Avatar>} label={user.username} />
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default TopBar;
