import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonList } from '@ionic/core/components/ion-list';
defineIonList();
import { defineCustomElement as defineIonListContent } from '@ionic/core/components/ion-list-header';
defineIonListContent();

export const IonList: Component<JSX.Props<HTMLIonListElement> & JSX.HTMLAttributes<HTMLIonListElement>> = props => {
  return <ion-list {...props}>{props.children}</ion-list>;
};

export const IonListHeader: Component<JSX.Props<HTMLIonListHeaderElement> & JSX.HTMLAttributes<HTMLIonListHeaderElement>> = props => {
  return <ion-list-header {...props}>{props.children}</ion-list-header>;
};
