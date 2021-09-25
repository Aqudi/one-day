import { IonButton, IonSearchbar, IonFooter, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import './Write.css'

import ApiClient from '../api/ApiClient'
import { useEffect, useState } from 'react'

const Write = () => {
  const [searchText, setSearchText] = useState('');
  const [profile, setProfile] = useState()
  const [todos, setTodos] = useState([])
  const [todoTitleInput, setTodoTitleInput] = useState('test title input 입니다.')

  // const getMyProfile = () => {
  //   me().then(data => {
  //     console.log(data)
  //     setProfile(data)
  //   })
  // }

  // useEffect(async () => {
  //   // Todo List를 가져오는 코드
  //   axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
  //     setTodos(response.data)
  //   })
  //   // Todo Item을 만드는 코드
  //   axios
  //     .post('https://jsonplaceholder.typicode.com/todos', {
  //       title: todoTitleInput,
  //     })
  //     .then(response => {
  //       console.log(response.data)
  //     })
  // }, [])

return (
    <IonPage>
      <IonContent fullscreen>
      <div className="head">
        <span>글쓰기</span>
      </div>

      <div className="write">
      <input></input>
      </div>

      </IonContent>
      <IonFooter>
      <div className="underbar">
        <span>다음</span>
      </div>
      </IonFooter>
   </IonPage>
  );
};

export default Write;
