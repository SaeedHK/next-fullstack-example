import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src="favicon.ico" />
        </div>
        <div className={styles.navbarItems}>
          <div className={styles.navbarItem}>Home</div>
          <div className={styles.navbarItem}>Home</div>
          <div className={styles.navbarItem}>Home</div>
        </div>
      </div>
    </div>
  );
}
