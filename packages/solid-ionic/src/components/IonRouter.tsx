import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonRouter } from '@ionic/core/components/ion-router';
defineIonRouter();
import { defineCustomElement as defineIonRouterLink } from '@ionic/core/components/ion-router-link';
defineIonRouterLink();
import { defineCustomElement as defineIonRouterOutlet } from '@ionic/core/components/ion-router-outlet';
defineIonRouterOutlet();
import { defineCustomElement as defineRoute } from '@ionic/core/components/ion-route';
defineRoute();
import { defineCustomElement as defineRouteRedirect } from '@ionic/core/components/ion-route-redirect';
defineRouteRedirect();

export const IonRouter: Component<JSX.Props<HTMLIonRouterElement> & JSX.HTMLAttributes<HTMLIonRouterElement>> = props => {
  return <ion-router {...props}>{props.children}</ion-router>;
};

export const IonRouterLink: Component<JSX.Props<HTMLIonRouterLinkElement> & JSX.HTMLAttributes<HTMLIonRouterLinkElement>> = props => {
  return <ion-router-link {...props}>{props.children}</ion-router-link>;
};

export const IonRouterOutlet: Component<JSX.Props<HTMLIonRouterOutletElement> & JSX.HTMLAttributes<HTMLIonRouterOutletElement>> = props => {
  return <ion-router-outlet {...props}>{props.children}</ion-router-outlet>;
};

export const IonRoute: Component<JSX.Props<HTMLIonRouteElement> & JSX.HTMLAttributes<HTMLIonRouteElement>> = props => {
  return <ion-route {...props}>{props.children}</ion-route>;
};

export const IonRouteRedirect: Component<JSX.Props<HTMLIonRouteRedirectElement> & JSX.HTMLAttributes<HTMLIonRouteRedirectElement>> = props => {
  return <ion-route-redirect {...props}>{props.children}</ion-route-redirect>;
};
