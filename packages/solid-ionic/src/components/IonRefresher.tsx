import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonRefresher } from '@ionic/core/components/ion-refresher';
defineIonRefresher();

import { defineCustomElement as defineIonRefresherContent } from '@ionic/core/components/ion-refresher-content';
defineIonRefresherContent();

export const IonRefresher: Component<JSX.Props<HTMLIonRefresherElement> & JSX.HTMLAttributes<HTMLIonRefresherElement>> = props => {
  return <ion-refresher {...props}>{props.children}</ion-refresher>;
};

export const IonRefresherContent: Component<JSX.Props<HTMLIonRefresherContentElement> & JSX.HTMLAttributes<HTMLIonRefresherContentElement>> = props => {
  return <ion-refresher-content {...props}>{props.children}</ion-refresher-content>;
};
