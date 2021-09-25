import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonToast,
  IonButtons,
  IonLoading,
  IonDatetime,
} from '@ionic/react'
import './Signup.css'

import { useState } from 'react'
import useAuthService from '../services/AuthService'

const Signup = () => {
  const { signUp, loading, error, user } = useAuthService()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [name, setName] = useState('')
  const [phone_number, setPhoneNumber] = useState('')
  const [birthday, setBirthday] = useState('2021-09-25')

  const handleSignup = event => {
    console.log('handleSignup')
    signUp({ username, email, password1, password2, name, birthday, phone_number, nickname:username })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start" />
          <IonTitle>Signup</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">아이디</IonLabel>
          <IonInput
            required="true"
            type="text"
            name="username"
            placeholder="아이디를 입력해주세요."
            value={username}
            onIonChange={event => setUsername(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">비밀번호</IonLabel>
          <IonInput
            required="true"
            autocomplete="true"
            type="password"
            name="password1"
            placeholder="비밀번호를 입력해주세요."
            value={password1}
            onIonChange={event => setPassword1(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">비밀번호 확인</IonLabel>
          <IonInput
            required="true"
            autocomplete="true"
            type="password"
            name="password2"
            placeholder="비밀번호를 똑같이 입력해주세요."
            value={password2}
            onIonChange={event => setPassword2(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">성함</IonLabel>
          <IonInput
            required="true"
            type="text"
            name="name"
            placeholder="성함/실명을 입력해주세요."
            value={name}
            onIonChange={event => setName(event.detail.value)}
          />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">생년월일</IonLabel>
          <IonDatetime
            name="birthday"
            placeholder="생년월일"
            displayFormat="YYYY-MM-DD"
            display-timezone="Asia/Seoul"
            value={birthday}
            pickerOptions={{
              buttons: [
                {
                  text: '저장',
                },

              ],
            }}
            onChange={e => setBirthday(e.detail.value)}></IonDatetime>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">이메일</IonLabel>
          <IonInput
            required="true"
            type="text"
            name="email"
            placeholder="이메일을 입력해주세요."
            value={email}
            onIonChange={event => setEmail(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">휴대전화</IonLabel>
          <IonInput
            required="true"
            type="text"
            name="phone_number"
            placeholder="휴대전화 번호를 입력해주세요."
            value={phone_number}
            onIonChange={event => setPhoneNumber(event.detail.value)}
          />
        </IonItem>
        <div style={{ padding: 10, paddingTop: 20 }}>
          <IonButton type="button" expand="full" style={{ margin: 14 }} onClick={handleSignup}>
            {user ? '이미 로그인 된 상태입니다.' : '로그인'}
          </IonButton>
          <IonButton type="button" expand="full" disabled={loading} style={{ margin: 14 }}>
            회원가입
          </IonButton>
        </div>
        <IonLoading isOpen={loading} message={'잠시만 기다려주세요...'} duration={5000} />
        <IonToast isOpen={error} message={error} duration={5000} />
      </IonContent>
    </IonPage>
  )
}

export default Signup
