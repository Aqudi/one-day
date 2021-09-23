import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import CircularButton from '../components/CircularButton'
import ITodo from '../interfaces/ITodo'
import './Home.css'

import axios from 'axios'
import { useEffect, useState } from 'react'

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Array<ITodo>>()
  const [todoTitleInput, setTodoTitleInput] = useState(
    'test title input 입니다.'
  )

  useEffect(() => {
    // Todo List를 가져오는 코드
    axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
      setTodos(response.data)
    })

    // Todo Item을 만드는 코드
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title: todoTitleInput,
      })
      .then((response) => {
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
        <CircularButton />
        {JSON.stringify(todos?.splice(0, 2))}
      </IonContent>
    </IonPage>
  )
}

export default Home
