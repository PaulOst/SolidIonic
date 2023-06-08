import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonActionSheet } from '@ionic/core/components/ion-action-sheet';
defineIonActionSheet();

export const IonActionSheet: Component<JSX.Props<HTMLIonActionSheetElement> & JSX.HTMLAttributes<HTMLIonActionSheetElement>> = props => {
  return <ion-action-sheet {...props}>{props.children}</ion-action-sheet>;
};

export default IonActionSheet;
