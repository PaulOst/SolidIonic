import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonSkeletonText } from '@ionic/core/components/ion-skeleton-text';
defineIonSkeletonText();

export const IonSkeletonText: Component<JSX.Props<HTMLIonSkeletonTextElement> & JSX.HTMLAttributes<HTMLIonSkeletonTextElement>> = props => {
  return <ion-skeleton-text {...props}>{props.children}</ion-skeleton-text>;
};

export default IonSkeletonText;
