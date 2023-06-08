import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonLabel } from '@ionic/core/components/ion-label';
defineIonLabel();

export const IonLabel: Component<JSX.Props<HTMLIonLabelElement> & JSX.HTMLAttributes<HTMLIonLabelElement>> = props => {
  return <ion-label {...props}>{props.children}</ion-label>;
};

export default IonLabel;
