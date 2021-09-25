import { useState, useContext } from 'react'
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
  IonFooter,
  IonLabel,
} from '@ionic/react'

import { me } from '../api/UsersApi'

import './Home.css'
import { useHistory } from 'react-router-dom'

import { pencil, pin, home, map } from 'ionicons/icons'
import SearchBar from '../components/SearchBar'
import userImage from '../images/user.png'

import Information from '../components/Information'
import Accomodate from '../components/Accomodate'
import Realstate from '../components/Realstate'
import { OnedayContext } from '../context/context'
const Home = () => {
  const [searchText, setSearchText] = useState('')
  const [profile, setProfile] = useState()
  const [todos, setTodos] = useState([])
  const [todoTitleInput, setTodoTitleInput] = useState('test title input 입니다.')
  const [selected, setSelected] = useState("숙박")
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
            <img src={userImage}></img>
          </div >
          <p>안녕하세요 username님</p>
          <SearchBar mode="md" value={searchText} onIonChange={e => setSearchText(e.detail.value)}></SearchBar>
        </div >
        <IonCard mode="md">
          <IonSegment mode="md" value={selected} onIonChange={e => setSelected(e.detail.value)} color="primary">
            <IonSegmentButton value="숙박" >
              <IonIcon icon={home} />
              <IonLabel> 숙박</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="정보">
              <IonIcon icon={pin} />
              <IonLabel> 정보</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="현지인매칭">
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
            {
              selected === '숙박' ? (
                <div className="body">
                  <Accomodate key="숙박"></Accomodate>
                </div>
              ) : selected === '정보' ? (
                <Information key="정보" />
              ) : (
                <IonCard>
                  <Realstate key="현지인"></Realstate>
                </IonCard>
              )
            }
          </div>
        </div>
      </IonContent >
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
