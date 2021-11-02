import React from 'react';
import ComplaintCard from './ComplaintCard';
import styles from '../../styles/customerProfile.module.css';
import ComplaintForm from '../complaintForm/ComplaintForm';
function CustomerProfile() {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.cardsContainer}>
        <ComplaintCard />
        <ComplaintCard />
        <ComplaintCard />
        <ComplaintCard />
      </div>
      <div className={styles.complaintForm}>
        <ComplaintForm />
      </div>
    </div>
  );
}

export default CustomerProfile;
