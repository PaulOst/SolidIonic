import { Component } from 'solid-js';
import { IonButton, IonButtons, IonContent, IonHeader, IonLabel, IonPage, IonSegment, IonSegmentButton, IonTitle, IonToolbar, IonIcon } from '@paulost/solid-ionic/src';
import { ellipsisHorizontal, ellipsisVertical, personCircle, search } from 'ionicons/icons';
// import './Tab1.css';

const Tab1: Component = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle slot='start'>Portfolio</IonTitle>
          <IonButtons slot='primary'>
            <IonButton>
              <IonIcon slot='icon-only' prop:icon={personCircle}></IonIcon>
            </IonButton>
          </IonButtons>
          {/* <IonButtons slot='secondary' >
            <IonButton>
              <IonIcon slot='icon-only' prop:icon={personCircle}></IonIcon>
            </IonButton>
          </IonButtons> */}
        </IonToolbar>
      </IonHeader>
      <IonContent prop:fullscreen>
        {/* <IonHeader prop:collapse='condense'>
          <IonToolbar>
            <IonTitle prop:size='large'>Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonSegment prop:value='buttons'>
          <IonSegmentButton prop:value='default'>
            <IonLabel>Returns</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton prop:value='segment'>
            <IonLabel>Activity</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton prop:value='buttons'>
            <IonLabel>Balance</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        Tab 1 Content
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
