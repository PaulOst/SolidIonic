import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonInfiniteScroll } from '@ionic/core/components/ion-infinite-scroll';
defineIonInfiniteScroll();

import { defineCustomElement as defineIonInfiniteScrollContent } from '@ionic/core/components/ion-infinite-scroll-content';
defineIonInfiniteScrollContent();

export const IonInfiniteScroll: Component<JSX.Props<HTMLIonInfiniteScrollElement> & JSX.HTMLAttributes<HTMLIonInfiniteScrollElement>> = props => {
  return <ion-infinite-scroll {...props}>{props.children}</ion-infinite-scroll>;
};

export const IonInfiniteScrollContent: Component<JSX.Props<HTMLIonInfiniteScrollContentElement> & JSX.HTMLAttributes<HTMLIonInfiniteScrollContentElement>> = props => {
  return <ion-infinite-scroll-content {...props}>{props.children}</ion-infinite-scroll-content>;
};
