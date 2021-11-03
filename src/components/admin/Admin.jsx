import { React, useState, useEffect } from 'react';
import styles from '../../styles/admin.module.css';
import Chart from './Chart';
import RequestCard from './RequestCard';
import { instance, url } from '../../API/axios';
import axios from 'axios';
import { useSelector } from 'react-redux';
import cookie from 'react-cookies';
function Admin() {
  const [allComplaints, setAllComplaints] = useState([]);
  const [results, setResults] = useState([0, 0, 0, 0]);

  // fetch complaints
  async function fetchAllComplaints() {
    const token = cookie.load('token');
    const response = await axios.get(`${url}/allComplaints`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log('response.data', response.data);
    setAllComplaints(response.data);

    for (let i = 0; i < response.data.length; i++) {
      if (response.data[i].complaint_type == 'Serial Complaints') {
        results[0] = results[0] + 1;
      }
      if (response.data[i].complaint_type == 'Personal Complaints') {
        results[1] = results[1] + 1;
      }
      if (response.data[i].complaint_type == 'Delivery Complaints') {
        results[2] = results[2] + 1;
      }
      if (response.data[i].complaint_type == 'Quality Complaints') {
        results[3] = results[3] + 1;
      }
    }
  }

  // solve , update status
  async function solveHandler(id) {
    const token = cookie.load('token');
    const response = await axios.put(
      `${url}/complaint/${id}`,
      { status: 'Solved' },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('response.data', response.data);
    fetchAllComplaints();
  }

  // reject , update status
  async function rejectHandler(id) {
    const token = cookie.load('token');
    const response = await axios.put(
      `${url}/complaint/${id}`,
      { status: 'Rejected' },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('response.data', response.data);
    fetchAllComplaints();
  }

  // did-mount
  useEffect(() => {
    fetchAllComplaints();
  }, []);
  return (
    <div className={styles.bigContainer}>
      <div className={styles.requestsContainer}>
        <RequestCard allComplaints={allComplaints} solveHandler={solveHandler} rejectHandler={rejectHandler} />
      </div>
      <div className={styles.chartContainer}>
        <Chart results={results} />
      </div>
    </div>
  );
}

export default Admin;
