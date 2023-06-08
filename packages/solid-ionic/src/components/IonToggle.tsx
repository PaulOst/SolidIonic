import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonToggle } from '@ionic/core/components/ion-toggle';
defineIonToggle();

export const IonToggle: Component<JSX.Props<HTMLIonToggleElement> & JSX.HTMLAttributes<HTMLIonToggleElement>> = props => {
  return <ion-toggle {...props}>{props.children}</ion-toggle>;
};

export default IonToggle;
