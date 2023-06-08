import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonThumbnail } from '@ionic/core/components/ion-thumbnail';
defineIonThumbnail();

export const IonThumbnail: Component<JSX.Props<HTMLIonThumbnailElement> & JSX.HTMLAttributes<HTMLIonThumbnailElement>> = props => {
  return <ion-thumbnail {...props}>{props.children}</ion-thumbnail>;
};

export default IonThumbnail;
