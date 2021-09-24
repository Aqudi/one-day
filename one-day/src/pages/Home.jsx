import React, { useState } from 'react';
import './Home.css'
import {
  IonSegment, IonSegmentButton, IonSearchbar, IonFooter, IonIcon, IonItem, IonButton, IonHeader,
  IonLabel, IonPage, IonTitle, IonToolbar, IonContent, IonSelect, IonSelectOption,
  IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
} from '@ionic/react';
import { pencil, pin, home, star, map, calendar, personCircle, informationCircle } from 'ionicons/icons';
import SearchBar from '../components/SearchBar'

const Home = () => {
  const [searchText, setSearchText] = useState('');
return (
    <IonPage>
      <IonContent fullscreen>
      <div className="head">
          <div className="profileBox"><img src="./resources/icon.png"></img></div>
          <p>안녕하세요 username님</p>
          <SearchBar value={searchText} onIonChange={e => setSearchText(e.detail.value)}></SearchBar>
        </div>

      <div className="menuBar">
        <IonToolbar>
          <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
            <IonSegmentButton value="home">숙박
              <IonIcon icon={home} />
            </IonSegmentButton>
            <IonSegmentButton value="bookmark">정보
              <IonIcon icon={pin} />
            </IonSegmentButton>
            <IonSegmentButton value="map">현지인매칭
            {/* <ion-icon name="contacts">ss</ion-icon> */}
              <IonIcon icon={map} />
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </div>

  <div className='body'>

    <div className="accommodation">
    <IonCard>
      <IonCardHeader>
          <IonCardTitle>강원도 와화우 리조트</IonCardTitle>
          <IonCardSubtitle>강원도 강릉시 와화우로</IonCardSubtitle>
      </IonCardHeader>

        <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </IonCardContent>
    </IonCard>

    <IonCard>
      <IonCardHeader>
        <img id="homeImg"></img>
          <IonCardTitle>강원도 와화우 리조트</IonCardTitle>
          <IonCardSubtitle>강원도 강릉시 와화우로</IonCardSubtitle>
          <IonCardSubtitle>강원도 강릉시 와화우로</IonCardSubtitle>
      </IonCardHeader>

        <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
        </IonCardContent>
    </IonCard>
    </div>

</div>

      </IonContent>
      <IonFooter>
      <div className="underbar">
        <IonButton color="primary" value="home">
              <IonIcon icon={home} />
        </IonButton>
        <IonButton color="primary" value="pencil">
              <IonIcon icon={pencil} />
        </IonButton>
      </div>
      </IonFooter>
    // </IonPage>
  );
};

export default Home;
