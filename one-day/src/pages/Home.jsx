import { useEffect, useState } from 'react'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonPage, IonSegment, IonSegmentButton, IonToolbar, IonFooter } from '@ionic/react'

import { me } from '../api/UsersApi'

import './Home.css'
import axios from 'axios'

import { pencil, pin, home, map } from 'ionicons/icons';
import SearchBar from '../components/SearchBar'

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [profile, setProfile] = useState()
  const [todos, setTodos] = useState([])
  const [todoTitleInput, setTodoTitleInput] = useState('test title input 입니다.')

  const getMyProfile = () => {
    me().then(data => {
      console.log(data)
      setProfile(data)
    })
  }

  useEffect(async () => {
    // Todo List를 가져오는 코드
    axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
      setTodos(response.data)
    })
    // Todo Item을 만드는 코드
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title: todoTitleInput,
      })
      .then(response => {
        console.log(response.data)
      })
  }, [])

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
   </IonPage>
  );
};

export default Home;
