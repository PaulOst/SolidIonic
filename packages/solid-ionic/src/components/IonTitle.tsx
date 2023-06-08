import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonTitle } from '@ionic/core/components/ion-title';
defineIonTitle();

export const IonTitle: Component<JSX.Props<HTMLIonTitleElement> & JSX.HTMLAttributes<HTMLIonTitleElement>> = props => {
  return <ion-title {...props}>{props.children}</ion-title>;
};

export default IonTitle;
