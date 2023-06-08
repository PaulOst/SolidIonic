import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonText } from '@ionic/core/components/ion-text';
defineIonText();

export const IonText: Component<JSX.Props<HTMLIonTextElement> & JSX.HTMLAttributes<HTMLIonTextElement>> = props => {
  return <ion-text {...props}>{props.children}</ion-text>;
};

export default IonText;
