import React from 'react';
import styles from '../../styles/home.module.css';
import heroImage from '../../images/fruits&vegetables.png';
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heroImage}>
        <img src={heroImage} alt='' className={styles.img} />
      </div>
      <div className={styles.heroText}>
        <h1>Fresh & Healthy Organic Vegetables</h1>
        <p>Our store offers you always fresh vegetables all year round, Buy from a wide range of high quality organic vegetables.</p>

        <button className={styles.joinBtn}>Join us</button>
      </div>
    </div>
  );
}

export default Home;
