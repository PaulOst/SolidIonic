import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonBackdrop } from '@ionic/core/components/ion-backdrop';
defineIonBackdrop();

export const IonBackdrop: Component<JSX.Props<HTMLIonBackdropElement> & JSX.HTMLAttributes<HTMLIonBackdropElement>> = props => {
  return <ion-backdrop {...props}>{props.children}</ion-backdrop>;
};

export default IonBackdrop;
