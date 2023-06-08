import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonModal } from '@ionic/core/components/ion-modal';
defineIonModal();

export const IonModal: Component<JSX.Props<HTMLIonModalElement> & JSX.HTMLAttributes<HTMLIonModalElement>> = props => {
  return <ion-modal {...props}>{props.children}</ion-modal>;
};

export default IonModal;
