'use client';
import Image from 'next/image';

import Test from './AutoComplete';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Test />
    </main>
  );
}
