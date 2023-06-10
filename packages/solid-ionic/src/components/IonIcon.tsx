import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonIcon } from 'ionicons/components/ion-icon';
defineIonIcon();

export const IonIcon: Component<JSX.Props<HTMLIonIconElement> & JSX.HTMLAttributes<HTMLIonIconElement>> = props => {
  return <ion-icon {...props}>{props.children}</ion-icon>;
};

export default IonIcon;
