import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonFooter } from '@ionic/core/components/ion-footer';
defineIonFooter();

export const IonFooter: Component<JSX.Props<HTMLIonFooterElement> & JSX.HTMLAttributes<HTMLIonFooterElement>> = props => {
  return <ion-footer {...props}>{props.children}</ion-footer>;
};

export default IonFooter;
