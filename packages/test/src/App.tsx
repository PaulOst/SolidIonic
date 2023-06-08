import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

import { IonButton, IonBadge } from '@paulost/solid-ionic/src';
import { initialize } from '@ionic/core/components';

// Initializes the Ionic config and `mode` behavior
if (navigator.userAgent.indexOf('Win') != -1) {
  initialize({ mode: 'ios' }); // Use iOS mode on Windows
} else {
  initialize(); // Use default mode everywhere else
}

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a class={styles.link} href='https://www.solidjs.com/' target='_blank' rel='noopener noreferrer'>
          Learn SolidJS
        </a>
        <a class={styles.link} href='https://ionicframework.com/' target='_blank' rel='noopener noreferrer'>
          Learn Ionic Framework
        </a>
        <IonButton>Test</IonButton>
        <IonBadge>7</IonBadge>
      </header>
    </div>
  );
};

export default App;
