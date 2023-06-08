import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonImg } from '@ionic/core/components/ion-img';
defineIonImg();

export const IonImg: Component<JSX.Props<HTMLIonImgElement> & JSX.HTMLAttributes<HTMLIonImgElement>> = props => {
  return <ion-img {...props}>{props.children}</ion-img>;
};

export default IonImg;
