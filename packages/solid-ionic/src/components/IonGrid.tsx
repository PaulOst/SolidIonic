import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonGrid } from '@ionic/core/components/ion-grid';
defineIonGrid();
import { defineCustomElement as defineIonCol } from '@ionic/core/components/ion-col';
defineIonCol();
import { defineCustomElement as defineIonRow } from '@ionic/core/components/ion-row';
defineIonRow();

export const IonGrid: Component<JSX.Props<HTMLIonGridElement> & JSX.HTMLAttributes<HTMLIonGridElement>> = props => {
  return <ion-grid {...props}>{props.children}</ion-grid>;
};

export const IonCol: Component<JSX.Props<HTMLIonColElement> & JSX.HTMLAttributes<HTMLIonColElement>> = props => {
  return <ion-col {...props}>{props.children}</ion-col>;
};

export const IonRow: Component<JSX.Props<HTMLIonRowElement> & JSX.HTMLAttributes<HTMLIonRowElement>> = props => {
  return <ion-row {...props}>{props.children}</ion-row>;
};
