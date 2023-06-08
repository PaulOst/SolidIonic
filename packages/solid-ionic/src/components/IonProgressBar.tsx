import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonProgressBar } from '@ionic/core/components/ion-progress-bar';
defineIonProgressBar();

export const IonProgressBar: Component<JSX.Props<HTMLIonProgressBarElement> & JSX.HTMLAttributes<HTMLIonProgressBarElement>> = props => {
  return <ion-progress-bar {...props}>{props.children}</ion-progress-bar>;
};

export default IonProgressBar;
