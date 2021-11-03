import React from 'react';
import styles from '../../styles/home.module.css';
import heroImage from '../../images/fruits&vegetables.png';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Home() {
  const { isLoggedIn, user } = useSelector((state) => state.authReducer);
  const history = useHistory();

  return (
    <div className={styles.container}>
      <div className={styles.heroImage}>
        <img src={heroImage} alt='' className={styles.img} />
      </div>
      <div className={styles.heroText}>
        <h1>Fresh & Healthy Organic Vegetables</h1>
        <p>Our store offers you always fresh vegetables all year round, Buy from a wide range of high quality organic vegetables.</p>

        {!isLoggedIn && (
          <button className={styles.joinBtn} onClick={() => history.push('/login')}>
            Join us
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
