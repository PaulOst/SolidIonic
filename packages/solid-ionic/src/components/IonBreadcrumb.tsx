import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonBreadcrumb } from '@ionic/core/components/ion-breadcrumb';
defineIonBreadcrumb();

import { defineCustomElement as defineIonBreadcrumbs } from '@ionic/core/components/ion-breadcrumbs';
defineIonBreadcrumbs();

export const IonBreadcrumb: Component<JSX.Props<HTMLIonBreadcrumbElement> & JSX.HTMLAttributes<HTMLIonBreadcrumbElement>> = props => {
  return <ion-breadcrumb {...props}>{props.children}</ion-breadcrumb>;
};

export const IonBreadcrumbs: Component<JSX.Props<HTMLIonBreadcrumbsElement> & JSX.HTMLAttributes<HTMLIonBreadcrumbsElement>> = props => {
  return <ion-breadcrumbs {...props}>{props.children}</ion-breadcrumbs>;
};
