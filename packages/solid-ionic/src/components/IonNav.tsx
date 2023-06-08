import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonNav } from '@ionic/core/components/ion-nav';
defineIonNav();

import { defineCustomElement as defineIonNavLink } from '@ionic/core/components/ion-nav-link';
defineIonNavLink();

export const IonNav: Component<JSX.Props<HTMLIonNavElement> & JSX.HTMLAttributes<HTMLIonNavElement>> = props => {
  return <ion-nav {...props}>{props.children}</ion-nav>;
};

export const IonNavLink: Component<JSX.Props<HTMLIonNavLinkElement> & JSX.HTMLAttributes<HTMLIonNavLinkElement>> = props => {
  return <ion-nav-link {...props}>{props.children}</ion-nav-link>;
};
