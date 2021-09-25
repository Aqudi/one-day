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
} from '@ionic/react'
import './Login.css'

import { useState } from 'react'
import useAuthService from '../services/AuthService'
import { useHistory } from 'react-router'
import yolam from '../images/yolam.png'
import textlogo from '../images/textlogo.png'

const Login = () => {
  const history = useHistory()
  const { login, loading, error, user } = useAuthService()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async event => {
    console.log('handleLogin')
    const res = await login({ username, password })
    if (res) {
      history.push('/home')
    }
  }

  const onClickSignup = event => {
    history.push('/signup')
  }

  return (
    <IonPage>
      <IonHeader>
      <div className="head">
        <span>로그인</span>
        </div>
      </IonHeader>
      <IonContent className="ion-padding">

          <div className="logo">
            <img src={textlogo}></img>
          </div>

          <br></br>

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
          <IonLabel position="floating">비밀번호</IonLabel>
          <IonInput
            required="true"
            autocomplete="true"
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onIonChange={event => setPassword(event.detail.value)}
          />
        </IonItem>
        <div style={{ padding: 10, paddingTop: 20 }}>
          <IonButton type="button" expand="full" style={{ margin: 14 }} onClick={handleLogin}>
            {user ? '이미 로그인 된 상태입니다.' : '로그인'}
          </IonButton>
          <IonButton type="button" expand="full" disabled={loading} style={{ margin: 14 }} onClick={onClickSignup}>
            회원가입
          </IonButton>
        </div>
        <IonLoading isOpen={loading} message={'잠시만 기다려주세요...'} duration={5000} />
        <IonToast isOpen={error} message={error} duration={5000} />
      </IonContent>
    </IonPage>
  )
}

export default Login
