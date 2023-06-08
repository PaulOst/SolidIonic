import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonInput } from '@ionic/core/components/ion-input';
defineIonInput();
import { defineCustomElement as defineIonTextArea } from '@ionic/core/components/ion-textarea';
defineIonTextArea();

export const IonInput: Component<JSX.Props<HTMLIonInputElement> & JSX.HTMLAttributes<HTMLIonInputElement>> = props => {
  return <ion-input {...props}>{props.children}</ion-input>;
};

export const IonTextarea: Component<JSX.Props<HTMLIonTextareaElement> & JSX.HTMLAttributes<HTMLIonTextareaElement>> = props => {
  return <ion-textarea {...props}>{props.children}</ion-textarea>;
};
