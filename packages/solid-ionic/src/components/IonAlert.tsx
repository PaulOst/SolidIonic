import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonAlert } from '@ionic/core/components/ion-alert';
defineIonAlert();

export const IonAlert: Component<JSX.Props<HTMLIonAlertElement> & JSX.HTMLAttributes<HTMLIonAlertElement>> = props => {
  return <ion-alert {...props}>{props.children}</ion-alert>;
};

export default IonAlert;
