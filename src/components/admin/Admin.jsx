import React from 'react';
import styles from '../../styles/admin.module.css';
import Chart from './Chart';
import RequestCard from './RequestCard';
function Admin() {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.requestsContainer}>
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
      </div>
      <div className={styles.chartContainer}>
        <Chart />
      </div>
    </div>
  );
}

export default Admin;
