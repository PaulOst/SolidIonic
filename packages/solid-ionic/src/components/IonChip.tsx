import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonChip } from '@ionic/core/components/ion-chip';
defineIonChip();

export const IonChip: Component<JSX.Props<HTMLIonChipElement> & JSX.HTMLAttributes<HTMLIonChipElement>> = props => {
  return <ion-chip {...props}>{props.children}</ion-chip>;
};

export default IonChip;
