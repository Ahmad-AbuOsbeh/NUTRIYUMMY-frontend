import React from 'react';
import styles from '../../styles/complaintCards.module.css';
import { RiDeleteBin2Line } from 'react-icons/ri';

function ComplaintCard({ myComplaints, deleteHandler }) {
  return (
    <>
      {myComplaints.map((comp) => (
        <div className={styles.card}>
          <section className={styles.firstSection}>
            <span></span>
            <h3 className={styles.idText}>{comp.complaint_id}</h3>
            <span className={styles.delete}>
              <RiDeleteBin2Line onClick={() => deleteHandler(comp._id)} />
            </span>
          </section>
          <section className={styles.secondSection}>
            <h4 className={styles.typeText}>{comp.complaint_type}</h4>
          </section>
          <section className={styles.thirdSection}>
            <div className={styles.contentContainer}>
              <p className={styles.content}>{`"${comp.complaint_content}."`}</p>
            </div>

            <div>
              <p>{comp.complaint_date}</p>
              <p>invoice number: {comp.invoice_number}</p>
            </div>
            <span
              className={`${styles.status} ${comp.complaint_status == 'Solved' ? styles.solved : styles.rr} ${comp.complaint_status == 'Rejected' ? styles.rejected : styles.rr} ${
                comp.complaint_status == 'Pending' ? styles.pending : styles.rr
              }`}
            >
              {comp.complaint_status}
            </span>
          </section>
          <section className={styles.fourthSection}></section>
        </div>
      ))}
    </>
  );
}

export default ComplaintCard;
