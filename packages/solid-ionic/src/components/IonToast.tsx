import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonToast } from '@ionic/core/components/ion-toast';
defineIonToast();

export const IonToast: Component<JSX.Props<HTMLIonToastElement> & JSX.HTMLAttributes<HTMLIonToastElement>> = props => {
  return <ion-toast {...props}>{props.children}</ion-toast>;
};

export default IonToast;
