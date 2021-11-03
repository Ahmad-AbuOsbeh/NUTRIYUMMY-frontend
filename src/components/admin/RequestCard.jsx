import React from 'react';
import styles from '../../styles/requests.module.css';
function RequestCard({ allComplaints, rejectHandler, solveHandler }) {
  return (
    <>
      {allComplaints.map((comp) => (
        <div className={styles.card}>
          <section className={styles.customerInfo}>
            <h3 className={styles.custTitle}>Customer Information:</h3>
            <div className={styles.nameDiv}>
              <p className={styles.field}>
                Name: <span className={styles.data}>{comp.customer_username}</span>
              </p>
              <span></span>

              <p className={styles.field}>
                position: <span className={styles.data}>{comp.customer_position}</span>
              </p>
            </div>
            <p className={`${styles.email} ${styles.field}`}>
              email: <span className={styles.data}>{comp.customer_email}</span>
            </p>
          </section>
          <section className={styles.complaintInfo}>
            <h3 className={styles.custTitle}>Complaint Information:</h3>
            <div className={styles.nameDiv}>
              <p className={styles.field}>
                ID: <span className={styles.data}>{comp.complaint_id}</span>
              </p>
              <span></span>
              <p className={styles.field}>
                Type: <span className={styles.data}>{comp.complaint_type}</span>
              </p>
            </div>
            <div className={styles.nameDiv}>
              <p className={styles.field}>
                Date: <span className={styles.data}>{comp.complaint_date}</span>
              </p>
              <span></span>

              <p className={styles.field}>
                Invoice Number: <span className={styles.data}>{comp.invoice_number}</span>
              </p>
            </div>
            <p className={`${styles.content} ${styles.field}`}>
              Content: <span className={styles.data}>"{comp.complaint_content}."</span>
            </p>
          </section>
          <p className={`${styles.status} ${styles.field}`}>
            Status:{' '}
            <span
              className={`${styles.data} ${comp.complaint_status == 'Solved' ? styles.solved : styles.rr} ${comp.complaint_status == 'Rejected' ? styles.rejected : styles.rr} ${
                comp.complaint_status == 'Pending' ? styles.pending : styles.rr
              }`}
            >
              {comp.complaint_status}
            </span>
          </p>
          <section className={styles.btnContainer}>
            <button className={styles.button} onClick={() => solveHandler(comp._id)}>
              Solve
            </button>
            <button className={styles.button} onClick={() => rejectHandler(comp._id)}>
              Reject
            </button>
          </section>
        </div>
      ))}
    </>
  );
}

export default RequestCard;
