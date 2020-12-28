import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <Layout>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <div className={styles.title}>Hello</div>
          <div className={styles.text}>Our company is best and no one can compete with us.</div>
        </div>
        <div className={styles.headerImage}>
          <Image src="/cube1.svg" width="500" height="500" />
        </div>
      </div>
    </Layout>
  );
}
