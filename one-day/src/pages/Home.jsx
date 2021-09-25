import { useEffect, useState, useContext } from 'react'
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
  IonFooter,
  IonNav,
  IonRow,
  IonCol,
  IonGrid,
  IonLabel,
} from '@ionic/react'

import { me } from '../api/UsersApi'

import './Home.css'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'

import { pencil, pin, home, map } from 'ionicons/icons'
import SearchBar from '../components/SearchBar'
import user from '../images/user.png'

const Home = () => {
  const [searchText, setSearchText] = useState('')
  const [profile, setProfile] = useState()
  const [todos, setTodos] = useState([])
  const [todoTitleInput, setTodoTitleInput] = useState('test title input 입니다.')
  const [selected, setSelected] = useState('숙박')
  const { user } = useContext(OnedayContext)
  let history = useHistory()
  const getMyProfile = () => {
    me().then(data => {
      console.log(data)
      setProfile(data)
    })
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="head">
          <div className="profileBox">
            <img src={user}></img>
          </div>
          <p>안녕하세요 username님</p>
          <SearchBar mode="md" value={searchText} onIonChange={e => setSearchText(e.detail.value)}></SearchBar>
        </div>
        <IonCard mode="md">
          <IonSegment mode="md" value="home" onIonChange={e => console.log('Segment selected', e.detail.value)} color="primary">
            <IonSegmentButton value="home" >
              <IonIcon icon={home} />
              <IonLabel> 숙박</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="info">
              <IonIcon icon={pin} />
              <IonLabel> 정보</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="native">
              <IonIcon icon={map} />
              <IonLabel> 현지인매칭</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonCard>

        <div className="body">
          <div className="accommodation">
            <IonCard mode="md">
              <IonCardHeader>
                <IonCardTitle>강원도 와화우 리조트</IonCardTitle>
                <IonCardSubtitle>강원도 강릉시 와화우로</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a
                week in the woods. Wash your spirit clean.
              </IonCardContent>
            </IonCard>

            <IonCard mode="md">
              <IonCardHeader>
                <img id="homeImg"></img>
                <IonCardTitle>강원도 와화우 리조트</IonCardTitle>
                <IonCardSubtitle>강원도 강릉시 와화우로</IonCardSubtitle>
                <IonCardSubtitle>강원도 강릉시 와화우로</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a
                week in the woods. Wash your spirit clean.
              </IonCardContent>
            </IonCard>
          </div>
        ) : selected === '정보' ? (
          <Information />
        ) : (
          <IonCard>
            <Realstate></Realstate>
          </IonCard>
        )}
      </IonContent>
      <IonFooter>
        <div class="underbar column">
          <div class="underbar">
            <IonButton color="primary" value="home">
              <IonIcon className="ion-justify-content-center" icon={home} />
            </IonButton>
            <IonButton color="primary" value="pencil">
              <IonIcon className="ion-justify-content-center" icon={pencil} />
            </IonButton>
          </div>
        </div>
      </IonFooter >
    </IonPage >
  )
}

export default Home
