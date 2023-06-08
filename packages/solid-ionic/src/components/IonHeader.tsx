import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonHeader } from '@ionic/core/components/ion-header';
defineIonHeader();

export const IonHeader: Component<JSX.Props<HTMLIonHeaderElement> & JSX.HTMLAttributes<HTMLIonHeaderElement>> = props => {
  return <ion-header {...props}>{props.children}</ion-header>;
};

export default IonHeader;
