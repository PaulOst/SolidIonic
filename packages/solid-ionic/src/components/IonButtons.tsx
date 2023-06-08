import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonButtons } from '@ionic/core/components/ion-buttons';
defineIonButtons();

export const IonButtons: Component<JSX.Props<HTMLIonButtonsElement> & JSX.HTMLAttributes<HTMLIonButtonsElement>> = props => {
  return <ion-buttons {...props}>{props.children}</ion-buttons>;
};

export default IonButtons;
