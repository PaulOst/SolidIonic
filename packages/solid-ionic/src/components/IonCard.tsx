import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonCard } from '@ionic/core/components/ion-card';
defineIonCard();
import { defineCustomElement as defineIonCardContent } from '@ionic/core/components/ion-card-content';
defineIonCardContent();
import { defineCustomElement as defineIonCardHeader } from '@ionic/core/components/ion-card-header';
defineIonCardHeader();
import { defineCustomElement as defineIonCardTitle } from '@ionic/core/components/ion-card-title';
defineIonCardTitle();
import { defineCustomElement as defineIonCardSubtitle } from '@ionic/core/components/ion-card-subtitle';
defineIonCardSubtitle();

export const IonCard: Component<JSX.Props<HTMLIonCardElement> & JSX.HTMLAttributes<HTMLIonCardElement>> = props => {
  return <ion-card {...props}>{props.children}</ion-card>;
};

export const IonCardContent: Component<JSX.Props<HTMLIonCardContentElement> & JSX.HTMLAttributes<HTMLIonCardContentElement>> = props => {
  return <ion-card-content {...props}>{props.children}</ion-card-content>;
};

export const IonCardHeader: Component<JSX.Props<HTMLIonCardHeaderElement> & JSX.HTMLAttributes<HTMLIonCardHeaderElement>> = props => {
  return <ion-card-header {...props}>{props.children}</ion-card-header>;
};

export const IonCardTitle: Component<JSX.Props<HTMLIonCardTitleElement> & JSX.HTMLAttributes<HTMLIonCardTitleElement>> = props => {
  return <ion-card-title {...props}>{props.children}</ion-card-title>;
};

export const IonCardSubtitle: Component<JSX.Props<HTMLIonCardSubtitleElement> & JSX.HTMLAttributes<HTMLIonCardSubtitleElement>> = props => {
  return <ion-card-subtitle {...props}>{props.children}</ion-card-subtitle>;
};
