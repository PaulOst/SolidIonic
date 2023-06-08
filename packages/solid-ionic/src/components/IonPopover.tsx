import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonPopover } from '@ionic/core/components/ion-popover';
defineIonPopover();

export const IonPopover: Component<JSX.Props<HTMLIonPopoverElement> & JSX.HTMLAttributes<HTMLIonPopoverElement>> = props => {
  return <ion-popover {...props}>{props.children}</ion-popover>;
};

export default IonPopover;
