import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/favicon.ico" width={500} height={500} />
        </div>
        <div className={styles.navbarItems}>
          <div className={styles.navbarItem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className={styles.navbarItem}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
          <div className={styles.navbarItem}>
            <div className={styles.btn}>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
}
