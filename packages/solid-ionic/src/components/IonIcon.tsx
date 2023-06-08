import type { Component, JSX } from 'solid-js';

// import { defineCustomElement as defineIonChip } from '@ionic/core/components/ion-icon';
// defineIonChip();

export const IonIcon: Component<JSX.Props<HTMLDivElement> & JSX.HTMLAttributes<HTMLDivElement>> = props => {
  return <div {...props}>{props.children}</div>;
};

export default IonIcon;
