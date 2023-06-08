import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonApp } from '@ionic/core/components/ion-app';
defineIonApp();

export const IonApp: Component<JSX.Props<HTMLIonAppElement> & JSX.HTMLAttributes<HTMLIonAppElement>> = props => {
  return <ion-app {...props}>{props.children}</ion-app>;
};

export default IonApp;
