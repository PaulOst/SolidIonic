import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonSegment } from '@ionic/core/components/ion-segment';
defineIonSegment();

import { defineCustomElement as defineIonSegmentButton } from '@ionic/core/components/ion-segment-button';
defineIonSegmentButton();

export const IonSegment: Component<JSX.Props<HTMLIonSegmentElement> & JSX.HTMLAttributes<HTMLIonSegmentElement>> = props => {
  return <ion-segment {...props}>{props.children}</ion-segment>;
};

export const IonSegmentButton: Component<JSX.Props<HTMLIonSegmentButtonElement> & JSX.HTMLAttributes<HTMLIonSegmentButtonElement>> = props => {
  return <ion-segment-button {...props}>{props.children}</ion-segment-button>;
};
