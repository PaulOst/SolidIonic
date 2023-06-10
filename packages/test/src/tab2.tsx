import { Component } from 'solid-js';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@paulost/solid-ionic/src';
// import './Tab2.css';

const Tab2: Component = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent prop:fullscreen>
        <IonHeader prop:collapse='condense'>
          <IonToolbar>
            <IonTitle prop:size='large'>Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        Tab 2 Content
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
