import React from 'react';
import styles from '../../styles/topBar.module.css';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import { GrLocation } from 'react-icons/gr';

function TopBar() {
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
          <button className={styles.button}>Get Started</button>
        </div>
      </div>
    </>
  );
}

export default TopBar;
