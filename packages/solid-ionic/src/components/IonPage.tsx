import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonApp } from '@ionic/core/components/ion-app';
defineIonApp();

export const IonPage: Component<JSX.Props<HTMLIonAppElement> & JSX.HTMLAttributes<HTMLIonAppElement>> = props => {
  return (
    <ion-app {...props} class='ion-page'>
      {props.children}
    </ion-app>
  );
};

export default IonPage;
