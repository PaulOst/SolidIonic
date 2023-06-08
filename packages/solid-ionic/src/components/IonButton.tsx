import type { Component, JSX } from 'solid-js';

// Shoelace Button
// import '@shoelace-style/shoelace/dist/components/button/button';
// import SlButton from '@shoelace-style/shoelace/dist/components/button/button';

// const Button: Component<JSX.Props<SlButton> & JSX.HTMLAttributes<SlButton>> = props => {
//   return <sl-button {...props}>{props.children}</sl-button>;
// };

//Ionic Button
import { defineCustomElement as defineIonButton } from '@ionic/core/components/ion-button';
defineIonButton();

export const IonButton: Component<JSX.Props<HTMLIonButtonElement> & JSX.HTMLAttributes<HTMLIonButtonElement>> = props => {
  return <ion-button {...props}>{props.children}</ion-button>;
};

export default IonButton;
