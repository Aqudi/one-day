import { useEffect, useState } from 'react'
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import CircularButton from '../components/CircularButton'

import StorageService from '../services/StorageService'
import { me } from '../api/UsersApi'

import './Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
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
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <CircularButton>Hello</CircularButton>
        <Link to="/login">로그인</Link>
        {JSON.stringify(todos?.splice(0, 2))}
        <IonButton onClick={getMyProfile}>내 정보 가져오기</IonButton>
        {JSON.stringify(profile)}
      </IonContent>
    </IonPage>
  )
}

export default Home
