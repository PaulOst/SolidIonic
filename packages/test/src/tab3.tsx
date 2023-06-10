import { Component } from 'solid-js';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@paulost/solid-ionic/src';
// import './Tab3.css';

const Tab3: Component = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent prop:fullscreen>
        <IonHeader prop:collapse='condense'>
          <IonToolbar>
            <IonTitle prop:size='large'>Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        Tab 3 Content
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
