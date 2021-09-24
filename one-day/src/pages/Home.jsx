import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import CircularButton from '../components/CircularButton'
import './Home.css'

import ApiClient from '../api/ApiClient'
import { useEffect, useState } from 'react'

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitleInput, setTodoTitleInput] = useState('test title input 입니다.')

  useEffect(() => {
    // Todo List를 가져오는 코드
    ApiClient.get('https://jsonplaceholder.typicode.com/todos').then(response => {
      setTodos(response.data)
    })

    // Todo Item을 만드는 코드
    ApiClient
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
        {JSON.stringify(todos?.splice(0, 2))}
      </IonContent>
    </IonPage>
  )
}

export default Home
