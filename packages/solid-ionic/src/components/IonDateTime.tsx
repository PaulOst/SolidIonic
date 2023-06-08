import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonDateTime } from '@ionic/core/components/ion-datetime';
defineIonDateTime();

import { defineCustomElement as defineIonDateTimeButton } from '@ionic/core/components/ion-datetime-button';
defineIonDateTimeButton();

export const IonDateTime: Component<JSX.Props<HTMLIonDatetimeElement> & JSX.HTMLAttributes<HTMLIonDatetimeElement>> = props => {
  return <ion-datetime {...props}>{props.children}</ion-datetime>;
};

export const IonDateTimeButton: Component<JSX.Props<HTMLIonDatetimeButtonElement> & JSX.HTMLAttributes<HTMLIonDatetimeButtonElement>> = props => {
  return <ion-datetime-button {...props}>{props.children}</ion-datetime-button>;
};

export default IonDateTime;
