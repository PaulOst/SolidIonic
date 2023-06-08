import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonBadge } from '@ionic/core/components/ion-badge';
defineIonBadge();

export const IonBadge: Component<JSX.Props<HTMLIonBadgeElement> & JSX.HTMLAttributes<HTMLIonBadgeElement>> = props => {
  return <ion-badge {...props}>{props.children}</ion-badge>;
};

export default IonBadge;
