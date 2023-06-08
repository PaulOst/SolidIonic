import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonAccordion } from '@ionic/core/components/ion-accordion';
defineIonAccordion();

import { defineCustomElement as defineIonAccordionGroup } from '@ionic/core/components/ion-accordion-group';
defineIonAccordionGroup();

interface Props extends JSX.HTMLAttributes<HTMLIonAccordionElement> {}

export const IonAccordion: Component<Props> = props => {
  return <ion-accordion {...props}>{props.children}</ion-accordion>;
};

export const IonAccordionGroup: Component<JSX.Props<HTMLIonAccordionGroupElement> & JSX.HTMLAttributes<HTMLIonAccordionGroupElement>> = props => {
  return <ion-accordion-group {...props}>{props.children}</ion-accordion-group>;
};
