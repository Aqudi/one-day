import { IonButton, IonSearchbar, IonFooter, IonIcon, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import CircularButton from '../components/CircularButton'
import './search.css'

import ApiClient from '../api/ApiClient'
import { chatbox, heart, star, pencil, pin, home, map } from 'ionicons/icons';
import { useEffect, useState } from 'react'

const Search = () => {
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
        </div>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value)}></IonSearchbar>
        <span id="description">검색하신 키워드에 대한 정보</span>
        <span id="right">MORE</span>
        <div className="bestResult">
          <p id="left">BEST!</p>
          <div className="bigCard">
            <img src=""></img>
            강릉 와하우리조트
            <p id="address">강원도 강릉시 와하우로78</p>
            <span id="like">좋아요<IonIcon icon={heart} /></span>
            <p id="star">별점<IonIcon icon={star} /></p>
            <p id="price">₩1,200,000 / 29박</p>
          </div>
        </div>
        <div className="result">
          <div className="smallCard1">
            <img src=""></img>
            숙소이름
            <p id="like">좋아요<IonIcon icon={heart} /></p>
            <p id="star">별점<IonIcon icon={star} /></p>
            <p id="price">₩가격 / 몇박인지</p>
          </div>

          <div className="smallCard2">
            <img src="" alt=""></img>
            <span id="username">유저이름</span>
            <span id="minute">n분 전</span>
            <p>게시글 제목</p>
            <p>게시글 내용 summary</p>
            <span id="comment"><IonIcon icon={chatbox} />댓글수</span>
            <span id="heart"><IonIcon icon={heart} />하트수</span>
            <p id="category">무슨 카테고리 글인지</p>
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

export default Search;
