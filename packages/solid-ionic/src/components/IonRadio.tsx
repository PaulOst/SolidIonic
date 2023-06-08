import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonRadio } from '@ionic/core/components/ion-radio';
defineIonRadio();

import { defineCustomElement as defineIonRadioGroup } from '@ionic/core/components/ion-radio-group';
defineIonRadioGroup();

export const IonRadio: Component<JSX.Props<HTMLIonRadioElement> & JSX.HTMLAttributes<HTMLIonRadioElement>> = props => {
  return <ion-radio {...props}>{props.children}</ion-radio>;
};

export const IonRadioGroup: Component<JSX.Props<HTMLIonRadioGroupElement> & JSX.HTMLAttributes<HTMLIonRadioGroupElement>> = props => {
  return <ion-radio-group {...props}>{props.children}</ion-radio-group>;
};
