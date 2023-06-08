import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonNote } from '@ionic/core/components/ion-note';
defineIonNote();

export const IonNote: Component<JSX.Props<HTMLIonNoteElement> & JSX.HTMLAttributes<HTMLIonNoteElement>> = props => {
  return <ion-note {...props}>{props.children}</ion-note>;
};

export default IonNote;
