import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonPicker } from '@ionic/core/components/ion-picker';
defineIonPicker();

export const IonPicker: Component<JSX.Props<HTMLIonPickerElement> & JSX.HTMLAttributes<HTMLIonPickerElement>> = props => {
  return <ion-picker {...props}>{props.children}</ion-picker>;
};

export default IonPicker;
