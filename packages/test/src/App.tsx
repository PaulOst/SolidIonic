import type { Component } from 'solid-js';
import { Routes, Route, A } from '@solidjs/router';

import { ellipse, square, triangle } from 'ionicons/icons';

import solidLogo from './assets/solid-logo.svg';
import ionicLogo from './assets/ionic-logo.svg';

import { IonApp, IonHeader, IonButton, IonBadge, IonLabel, IonSegment, IonSegmentButton, IonTabs, IonTabBar, IonTabButton, IonIcon } from '@paulost/solid-ionic/src';

import Tab1 from './tab1';

// Core CSS required for Ionic components to work properly
import '@ionic/core/css/core.css';
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css'; // Importing structure.css will cause a blank screen unless you add class="hydrated" to the html tag in index.html. This is a known issue with Ionic Framework. e.g., <html class="hydrated">
import '@ionic/core/css/typography.css';

// Optional CSS that can be commented out if not needed
import '@ionic/core/css/padding.css';
import '@ionic/core/css/float-elements.css';
import '@ionic/core/css/text-alignment.css';
import '@ionic/core/css/text-transformation.css';
import '@ionic/core/css/flex-utils.css';
import '@ionic/core/css/display.css';

// App styles
import styles from './App.module.css';

//// This block of code isn't needed unless you want to initialize the Ionic Framework with a different config and mode than the default one. i.e., iOS on Apple devices and Material Design on Android devices and Windows. In this example, I configure for iOS mode on Windows.
import { initialize } from '@ionic/core/components';
if (navigator.userAgent.indexOf('Win') != -1) {
  initialize({ mode: 'ios' }); // Use iOS mode on Windows
} else {
  initialize(); // Use default mode everywhere else. i.e., iOS on Apple devices and Material Design on Android devices and Windows.
}
////

// Theme variables
if (true) import('./theme/default.css'); // Default theme is from Ionic Framework.
else import('./theme/custom.css'); // Add your custom css to custom.css to make your own theme.

import Tab2 from './tab2';
import Tab3 from './tab3';

const App: Component = () => {
  return (
    <IonApp>
      <IonTabs>
        <Routes>
          <Route path='/tab1' component={Tab1} />
          <Route path='/tab2' component={Tab2} />
          <Route path='/tab3' component={Tab3} />
        </Routes>
        <IonTabBar slot='bottom'>
          <IonTabButton prop:href='/tab1'>
            <IonIcon aria-hidden='true' prop:icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton prop:href='/tab2'>
            <IonIcon aria-hidden='true' prop:icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton prop:href='/tab3'>
            <IonIcon aria-hidden='true' prop:icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      {/* <IonHeader>
        <img src={solidLogo} class={styles.logo} alt='solid logo' />
        <img src={ionicLogo} class={styles.logo} alt='ionic logo' />
      </IonHeader>
      <br />
      <a class={styles.link} href='https://www.solidjs.com/' target='_blank' rel='noopener noreferrer'>
        Learn SolidJS
      </a>
      <br />
      <a class={styles.link} href='https://ionicframework.com/' target='_blank' rel='noopener noreferrer'>
        Learn Ionic Framework
      </a>
      <br />
      <IonButton onClick={() => alert('Wow!')}>Ionic Button</IonButton>
      <IonBadge>7</IonBadge>
      <Tab1 />
      <IonSegment prop:value='buttons'>
        <IonSegmentButton prop:value='default'>
          <IonLabel>Default</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton prop:value='segment'>
          <IonLabel>Segment</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton prop:value='buttons'>
          <IonLabel>Button</IonLabel>
        </IonSegmentButton>
      </IonSegment> */}
    </IonApp>
  );
};

export default App;
