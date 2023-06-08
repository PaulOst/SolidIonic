import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonSearchbar } from '@ionic/core/components/ion-searchbar';
defineIonSearchbar();

export const IonSearchbar: Component<JSX.Props<HTMLIonSearchbarElement> & JSX.HTMLAttributes<HTMLIonSearchbarElement>> = props => {
  return <ion-searchbar {...props}>{props.children}</ion-searchbar>;
};

export default IonSearchbar;
