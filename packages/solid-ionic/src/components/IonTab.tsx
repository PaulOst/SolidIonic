import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonTab } from '@ionic/core/components/ion-tab';
defineIonTab();
import { defineCustomElement as defineIonTabs } from '@ionic/core/components/ion-tabs';
defineIonTabs();
import { defineCustomElement as defineIonTabBar } from '@ionic/core/components/ion-tab-bar';
defineIonTabBar();
import { defineCustomElement as defineIonTabButton } from '@ionic/core/components/ion-tab-button';
defineIonTabButton();

export const IonTab: Component<JSX.Props<HTMLIonTabElement> & JSX.HTMLAttributes<HTMLIonTabElement>> = props => {
  return <ion-tab {...props}>{props.children}</ion-tab>;
};

export const IonTabs: Component<JSX.Props<HTMLIonTabsElement> & JSX.HTMLAttributes<HTMLIonTabsElement>> = props => {
  return <ion-tabs {...props}>{props.children}</ion-tabs>;
};

export const IonTabBar: Component<JSX.Props<HTMLIonTabBarElement> & JSX.HTMLAttributes<HTMLIonTabBarElement>> = props => {
  return <ion-tab-bar {...props}>{props.children}</ion-tab-bar>;
};

export const IonTabButton: Component<JSX.Props<HTMLIonTabButtonElement> & JSX.HTMLAttributes<HTMLIonTabButtonElement>> = props => {
  return <ion-tab-button {...props}>{props.children}</ion-tab-button>;
};
