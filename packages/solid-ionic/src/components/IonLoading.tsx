import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonLoading } from '@ionic/core/components/ion-loading';
defineIonLoading();

export const IonLoading: Component<JSX.Props<HTMLIonLoadingElement> & JSX.HTMLAttributes<HTMLIonLoadingElement>> = props => {
  return <ion-loading {...props}>{props.children}</ion-loading>;
};

export default IonLoading;
