import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonReorder } from '@ionic/core/components/ion-reorder';
defineIonReorder();

import { defineCustomElement as defineIonReorderGroup } from '@ionic/core/components/ion-reorder-group';
defineIonReorderGroup();

export const IonReorder: Component<JSX.Props<HTMLIonReorderElement> & JSX.HTMLAttributes<HTMLIonReorderElement>> = props => {
  return <ion-reorder {...props}>{props.children}</ion-reorder>;
};

export const IonReorderGroup: Component<JSX.Props<HTMLIonReorderGroupElement> & JSX.HTMLAttributes<HTMLIonReorderGroupElement>> = props => {
  return <ion-reorder-group {...props}>{props.children}</ion-reorder-group>;
};
