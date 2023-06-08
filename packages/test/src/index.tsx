/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error('Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?');
}

// import { initialize } from '@ionic/core/components';

// // Initializes the Ionic config and `mode` behavior
// if (navigator.userAgent.indexOf('Win') != -1) {
//   initialize({ mode: 'ios' }); // Use iOS mode on Windows
// } else {
//   initialize(); // Use default mode everywhere else
// }

render(() => <App />, root!);
