import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonIonSplitPane } from '@ionic/core/components/ion-split-pane';
defineIonIonSplitPane();

export const IonSplitPane: Component<JSX.Props<HTMLIonSplitPaneElement> & JSX.HTMLAttributes<HTMLIonSplitPaneElement>> = props => {
  return <ion-split-pane {...props}>{props.children}</ion-split-pane>;
};

export default IonSplitPane;
