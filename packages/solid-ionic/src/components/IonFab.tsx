import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonFab } from '@ionic/core/components/ion-fab';
defineIonFab();
import { defineCustomElement as defineIonFabButton } from '@ionic/core/components/ion-fab-button';
defineIonFabButton();
import { defineCustomElement as defineIonFabList } from '@ionic/core/components/ion-fab-list';
defineIonFabList();

export const IonFab: Component<JSX.Props<HTMLIonFabElement> & JSX.HTMLAttributes<HTMLIonFabElement>> = props => {
  return <ion-fab {...props}>{props.children}</ion-fab>;
};

export const IonFabButton: Component<JSX.Props<HTMLIonFabButtonElement> & JSX.HTMLAttributes<HTMLIonFabButtonElement>> = props => {
  return <ion-fab-button {...props}>{props.children}</ion-fab-button>;
};

export const IonFabList: Component<JSX.Props<HTMLIonFabListElement> & JSX.HTMLAttributes<HTMLIonFabListElement>> = props => {
  return <ion-fab-list {...props}>{props.children}</ion-fab-list>;
};
