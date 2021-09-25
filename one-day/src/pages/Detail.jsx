import { IonButton, IonSearchbar, IonFooter, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import './Detail.css'

import ApiClient from '../api/ApiClient'
import { chatbox, heart, star, pencil, pin, home, map } from 'ionicons/icons';
import { useEffect, useState } from 'react'

const Detail = () => {
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
        <span>숙소 이름</span>
        <span id="like">좋아요<IonIcon icon={heart} /></span>
      </div>

          <img src="" alt="" id="detailimg"></img>
          <div className="Detail">
          <p id="name">숙소 이름</p>
          <span id="address">강원도 강릉시 와하우로78</span>
          <span id="price">₩1,200,000 / 29박</span>
          <span id="star">별점<IonIcon icon={star} /></span>
          <span id="reservation"><button>예약하기</button></span>
      </div>

      <div className="result">

          <p id="subtitle">비슷한 곳 찾기</p>
          <div className="notice">
          <p id="like">좋아요<IonIcon icon={heart} /></p>
          <img src="" alt=""></img>
            <p id="name">숙소이름</p>
            <p id="price">₩가격 / 몇박</p>
          </div>

          <p id="subtitle">호스트의 말</p>
          <div className="list">

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

export default Detail;
