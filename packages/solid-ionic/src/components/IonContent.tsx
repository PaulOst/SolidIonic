import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonContent } from '@ionic/core/components/ion-content';
defineIonContent();

export const IonContent: Component<JSX.Props<HTMLIonContentElement> & JSX.HTMLAttributes<HTMLIonContentElement>> = props => {
  return <ion-content {...props}>{props.children}</ion-content>;
};

export default IonContent;
