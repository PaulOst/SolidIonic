import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonCheckbox } from '@ionic/core/components/ion-checkbox';
defineIonCheckbox();

export const IonCheckbox: Component<JSX.Props<HTMLIonCheckboxElement> & JSX.HTMLAttributes<HTMLIonCheckboxElement>> = props => {
  return <ion-checkbox {...props}>{props.children}</ion-checkbox>;
};

export default IonCheckbox;
