import type { Component, JSX } from 'solid-js';

import { defineCustomElement as defineIonItem } from '@ionic/core/components/ion-item';
defineIonItem();
import { defineCustomElement as defineIonItemDivider } from '@ionic/core/components/ion-item-divider';
defineIonItemDivider();
import { defineCustomElement as defineIonItemGroup } from '@ionic/core/components/ion-item-group';
defineIonItemGroup();
import { defineCustomElement as defineIonItemSliding } from '@ionic/core/components/ion-item-sliding';
defineIonItemSliding();
import { defineCustomElement as defineIonItemOptions } from '@ionic/core/components/ion-item-options';
defineIonItemOptions();
import { defineCustomElement as defineIonItemOption } from '@ionic/core/components/ion-item-option';
defineIonItemOption();

export const IonItem: Component<JSX.Props<HTMLIonItemElement> & JSX.HTMLAttributes<HTMLIonItemElement>> = props => {
  return <ion-item {...props}>{props.children}</ion-item>;
};

export const IonItemDivider: Component<JSX.Props<HTMLIonItemDividerElement> & JSX.HTMLAttributes<HTMLIonItemDividerElement>> = props => {
  return <ion-item-divider {...props}>{props.children}</ion-item-divider>;
};

export const IonItemGroup: Component<JSX.Props<HTMLIonItemGroupElement> & JSX.HTMLAttributes<HTMLIonItemGroupElement>> = props => {
  return <ion-item-group {...props}>{props.children}</ion-item-group>;
};

export const IonItemSliding: Component<JSX.Props<HTMLIonItemSlidingElement> & JSX.HTMLAttributes<HTMLIonItemSlidingElement>> = props => {
  return <ion-item-sliding {...props}>{props.children}</ion-item-sliding>;
};

export const IonItemOptions: Component<JSX.Props<HTMLIonItemOptionsElement> & JSX.HTMLAttributes<HTMLIonItemOptionsElement>> = props => {
  return <ion-item-options {...props}>{props.children}</ion-item-options>;
};

export const IonItemOption: Component<JSX.Props<HTMLIonItemOptionElement> & JSX.HTMLAttributes<HTMLIonItemOptionElement>> = props => {
  return <ion-item-option {...props}>{props.children}</ion-item-option>;
};
