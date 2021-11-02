import React from 'react';
import styles from '../../styles/requests.module.css';
function RequestCard() {
  return (
    <div className={styles.card}>
      <section className={styles.customerInfo}>
        <h3 className={styles.custTitle}>Customer Information:</h3>
        <div className={styles.nameDiv}>
          <p className={styles.field}>
            Name: <span className={styles.data}>Ahmad Abu Osbeh</span>
          </p>
          <p className={styles.field}>
            position: <span className={styles.data}>Amman</span>
          </p>
          <span></span>
        </div>
        <p className={`${styles.email} ${styles.field}`}>
          email: <span className={styles.data}>ahmadabuosbeh20@gmail.com</span>
        </p>
      </section>
      <section className={styles.complaintInfo}>
        <h3 className={styles.custTitle}>Complaint Information:</h3>
        <div className={styles.nameDiv}>
          <p className={styles.field}>
            ID: <span className={styles.data}>Ahm-158424</span>
          </p>
          <span></span>
          <p className={styles.field}>
            Type: <span className={styles.data}>Serial Complaint</span>
          </p>
        </div>
        <div className={styles.nameDiv}>
          <p className={styles.field}>
            Date: <span className={styles.data}>1-11-2021</span>
          </p>
          <span></span>

          <p className={styles.field}>
            Invoice Number: <span className={styles.data}>4578</span>
          </p>
        </div>
        <p className={`${styles.content} ${styles.field}`}>
          Content: <span className={styles.data}>"some one treats me in not professional way while i'm talking my order, and now I'm ganna take an action."</span>
        </p>
      </section>
      <p className={`${styles.status} ${styles.field}`}>
        Status: <span className={styles.data}>Pending</span>
      </p>
      <section className={styles.btnContainer}>
        <button className={styles.button}>Solve</button>
        <button className={styles.button}>Reject</button>
      </section>
    </div>
  );
}

export default RequestCard;
