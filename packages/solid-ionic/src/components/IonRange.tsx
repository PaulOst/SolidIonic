import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonRange } from '@ionic/core/components/ion-range';
defineIonRange();

export const IonRange: Component<JSX.Props<HTMLIonRangeElement> & JSX.HTMLAttributes<HTMLIonRangeElement>> = props => {
  return <ion-range {...props}>{props.children}</ion-range>;
};

export default IonRange;
