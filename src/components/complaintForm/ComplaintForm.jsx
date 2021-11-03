import { React, useState, useEffect } from 'react';
import styles from '../../styles/complaintForm.module.css';
import { instance, url } from '../../API/axios';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ComplaintForm({ fetchMyComplaint }) {
  const history = useHistory();

  const [complaintData, setComplaintData] = useState({ complaintType: 'Serial Complaints' });
  const { isLoggedIn, user } = useSelector((state) => state.authReducer);

  // addComplaintHandler
  async function addComplaintHandler(e) {
    e.preventDefault();
    const response = await axios.post(`${url}/complaint`, complaintData, {
      headers: {
        authorization: `Bearer ${user?.token}`,
      },
    });
    e.target.reset();
    fetchMyComplaint();
  }

  // on change handler
  function onChangeHandler(e) {
    setComplaintData({ ...complaintData, [e.target.name]: e.target.value });
  }
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={addComplaintHandler}>
        <h2>Complaint Form:</h2>
        <div className={styles.fieldsContainer}>
          <select className={styles.field} placeholder='complaint type' name='complaintType' defaultValue='Serial Complaints' onChange={onChangeHandler}>
            <option value='Serial Complaints'>Serial Complaints</option>
            <option value='Personal Complaints'>Personal Complaints</option>
            <option value='Delivery Complaints'>Delivery Complaints</option>
            <option value='Quality Complaints'>Quality Complaints</option>
          </select>
          <input className={styles.field} type='date' placeholder='date' name='complaintDate' onChange={onChangeHandler} />
          <input className={styles.field} type='number' placeholder='Invoice number' name='invoiceNumber' onChange={onChangeHandler} />
          <input className={`${styles.field} ${styles.fieldContent}`} type='text' placeholder='complaint content..' name='complaintContent' onChange={onChangeHandler} />
        </div>
        <button className={styles.formbtn}>Submit</button>
      </form>
    </div>
  );
}

export default ComplaintForm;
