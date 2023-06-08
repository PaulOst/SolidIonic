import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonAvatar } from '@ionic/core/components/ion-avatar';
defineIonAvatar();

export const IonAvatar: Component<JSX.Props<HTMLIonAvatarElement> & JSX.HTMLAttributes<HTMLIonAvatarElement>> = props => {
  return <ion-avatar {...props}>{props.children}</ion-avatar>;
};

export default IonAvatar;
