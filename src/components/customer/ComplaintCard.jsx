import React from 'react';
import styles from '../../styles/complaintCards.module.css';
function ComplaintCard() {
  return (
    <div className={styles.card}>
      <section className={styles.firstSection}>
        <h3 className={styles.idText}>Ahm-154785</h3>
      </section>
      <section className={styles.secondSection}>
        <h4 className={styles.typeText}>Serial Complaint</h4>
      </section>
      <section className={styles.thirdSection}>
        <div className={styles.contentContainer}>
          <p className={styles.content}>"some one treats me in not professional way while i'm talking my order, and now I'm ganna take an action."</p>
        </div>

        <div>
          <p>1-11-2021</p>
          <p>invoice number: 52148</p>
        </div>
        <span className={styles.status}>Pending</span>
      </section>
      <section className={styles.fourthSection}></section>
    </div>
  );
}

export default ComplaintCard;
