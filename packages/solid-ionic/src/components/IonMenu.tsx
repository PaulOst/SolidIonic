import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonMenu } from '@ionic/core/components/ion-menu';
defineIonMenu();
import { defineCustomElement as defineIonMenuButton } from '@ionic/core/components/ion-menu-button';
defineIonMenuButton();
import { defineCustomElement as defineIonMenuToggle } from '@ionic/core/components/ion-menu-toggle';
defineIonMenuToggle();

export const IonMenu: Component<JSX.Props<HTMLIonMenuElement> & JSX.HTMLAttributes<HTMLIonMenuElement>> = props => {
  return <ion-menu {...props}>{props.children}</ion-menu>;
};

export const IonMenuButton: Component<JSX.Props<HTMLIonMenuButtonElement> & JSX.HTMLAttributes<HTMLIonMenuButtonElement>> = props => {
  return <ion-menu-button {...props}>{props.children}</ion-menu-button>;
};

export const IonMenuToggle: Component<JSX.Props<HTMLIonMenuToggleElement> & JSX.HTMLAttributes<HTMLIonMenuToggleElement>> = props => {
  return <ion-menu-toggle {...props}>{props.children}</ion-menu-toggle>;
};
