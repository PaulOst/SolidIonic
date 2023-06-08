import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonSpinner } from '@ionic/core/components/ion-spinner';
defineIonSpinner();

export const IonSpinner: Component<JSX.Props<HTMLIonSpinnerElement> & JSX.HTMLAttributes<HTMLIonSpinnerElement>> = props => {
  return <ion-spinner {...props}>{props.children}</ion-spinner>;
};

export default IonSpinner;
