import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonBackButton } from '@ionic/core/components/ion-back-button';
defineIonBackButton();

export const IonBackButton: Component<JSX.Props<HTMLIonBackButtonElement> & JSX.HTMLAttributes<HTMLIonBackButtonElement>> = props => {
  return <ion-back-button {...props}>{props.children}</ion-back-button>;
};

export default IonBackButton;
