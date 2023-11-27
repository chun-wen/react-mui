'use client';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import Test from './AutoComplete';
import AddPhoto from './IconButton';
import KeepMountedModal from './Modal';
import styles from './page.module.css';
import theme from './theme';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main className={styles.main}>
        <Test />
        <KeepMountedModal />
        <AddPhoto
          onClick={() => {
            console.log('clicked');
          }}
        />
      </main>
    </ThemeProvider>
  );
}
