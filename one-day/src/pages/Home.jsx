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
} from '@ionic/react'

import { me } from '../api/UsersApi'

import './Home.css'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'

import { pencil, pin, home, map } from 'ionicons/icons'
import SearchBar from '../components/SearchBar'
import Information from '../components/Information'
import Accomodate from '../components/Accomodate'
import Realstate from '../components/Realstate'
import { OnedayContext } from '../context/context'
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
            <img src="./resources/icon.png"></img>
          </div>
          <p className="titleName">{`안녕하세요 ${user && user.username}님`}</p>
          <SearchBar value={searchText} onIonChange={e => setSearchText(e.detail.value)}></SearchBar>
        </div>

        <div className="menuBar">
          <IonToolbar>
            <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
              <IonSegmentButton
                value="home"
                onClick={() => {
                  setSelected('숙박')
                }}>
                숙박
                <IonIcon icon={home} />
              </IonSegmentButton>
              <IonSegmentButton
                value="bookmark"
                onClick={() => {
                  setSelected('정보')
                }}>
                정보
                <IonIcon icon={pin} />
              </IonSegmentButton>
              <IonSegmentButton
                value="map"
                onClick={() => {
                  setSelected('현지인매칭')
                }}>
                현지인매칭
                {/* <ion-icon name="contacts">ss</ion-icon> */}
                <IonIcon icon={map} />
              </IonSegmentButton>
            </IonSegment>
          </IonToolbar>
        </div>
        {selected === '숙박' ? (
          <div className="body">
            <Accomodate></Accomodate>
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
        <div className="underbar">
          <Link to="/home">
            <IonButton color="primary" value="home">
              <IonIcon icon={home} />
            </IonButton>
          </Link>
          <Link to="/write">
            <IonButton color="primary" value="pencil">
              <IonIcon icon={pencil} />
            </IonButton>
          </Link>
        </div>
      </IonFooter>
    </IonPage>
  )
}

export default Home
