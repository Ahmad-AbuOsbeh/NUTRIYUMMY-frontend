import React from 'react';
import styles from '../../styles/complaintForm.module.css';
function ComplaintForm() {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <h2>Complaint Form:</h2>
        <div className={styles.fieldsContainer}>
          <select className={styles.field} placeholder='complaint type'>
            <option>Serial Complaints</option>
            <option>Personal Complaints</option>
            <option>Delivery Complaints</option>
            <option>Quality Complaints</option>
          </select>
          <input className={styles.field} type='date' placeholder='date' />
          <input className={styles.field} type='number' placeholder='Invoice number' />
          <input className={`${styles.field} ${styles.fieldContent}`} type='text' placeholder='complaint content..' />
        </div>
        <button className={styles.formbtn}>Submit</button>
      </form>
    </div>
  );
}

export default ComplaintForm;
