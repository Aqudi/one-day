import { IonButton, IonSearchbar, IonFooter, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import './Mypage.css'

import ApiClient from '../api/ApiClient'
import { book, chatbox, heart, star, pencil, pin, home, map } from 'ionicons/icons';
import { useEffect, useState } from 'react'

const Mypage = () => {
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
        <span>마이페이지</span>
      </div>

        <div className="userprofile">
          <div className="imageframe">
          <img id="userpic" src=""></img>
          </div>
          <p id="username">이름</p>
          <p>지역</p>
          <button>정보수정</button>
          <button>로그아웃</button>
        </div>

          <div className="button1">
          <IonIcon icon={book} size="large"/>내가 작성한 글 보기
          </div>


          <div className="button2">
          <IonIcon icon={chatbox} size="large" />내가 작성한 댓글 보기
          </div>

          <div className="button3">
          <IonIcon icon={heart} size="large" />좋아요 누른 글 보기
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

export default Mypage;
