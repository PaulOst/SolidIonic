import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonToolbar } from '@ionic/core/components/ion-toolbar';
defineIonToolbar();

export const IonToolbar: Component<JSX.Props<HTMLIonToolbarElement> & JSX.HTMLAttributes<HTMLIonToolbarElement>> = props => {
  return <ion-toolbar {...props}>{props.children}</ion-toolbar>;
};

export default IonToolbar;
