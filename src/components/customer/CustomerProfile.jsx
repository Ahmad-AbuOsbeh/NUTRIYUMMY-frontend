import { React, useState, useEffect } from 'react';
import ComplaintCard from './ComplaintCard';
import styles from '../../styles/customerProfile.module.css';
import ComplaintForm from '../complaintForm/ComplaintForm';
import { instance, url } from '../../API/axios';
import axios from 'axios';
import { useSelector } from 'react-redux';
import cookie from 'react-cookies';

function CustomerProfile() {
  const [myComplaints, setMyComplaints] = useState([]);
  const { isLoggedIn, user } = useSelector((state) => state.authReducer);

  // fetch complaints
  async function fetchMyComplaint() {
    const token = cookie.load('token');
    const response = await axios.get(`${url}/myComplaints`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    setMyComplaints(response.data);
  }

  // delete handler
  async function deleteHandler(id) {
    const token = cookie.load('token');
    const response = await axios.delete(`${url}/complaint/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    fetchMyComplaint();
  }

  // did-mount
  useEffect(() => {
    fetchMyComplaint();
  }, []);
  return (
    <div className={styles.bigContainer}>
      <div className={styles.cardsContainer}>
        <ComplaintCard myComplaints={myComplaints} deleteHandler={deleteHandler} />
      </div>
      <div className={styles.complaintForm}>
        <ComplaintForm fetchMyComplaint={fetchMyComplaint} />
      </div>
    </div>
  );
}

export default CustomerProfile;
