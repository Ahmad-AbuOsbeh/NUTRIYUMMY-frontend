import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styles from '../../styles/chart.module.css';
const data = {
  labels: ['Serial Complaints', 'Personal Complaints', 'Delivery Complaints', 'Quality Complaints'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: ['#62a403', '#ff7800', '#055052', '#C400FF'],
      borderColor: ['#62a403', '#ff7800', '#055052', '#C400FF'],
      borderWidth: 1,
    },
  ],
};
function Chart() {
  return (
    <div className={styles.chart}>
      <div className='header'>
        <h2 className='title'>Complaints Types Chart:</h2>
        <div className='links'></div>
      </div>
      <Doughnut data={data} />
    </div>
  );
}

export default Chart;
