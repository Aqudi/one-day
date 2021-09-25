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
import './Signup.css'

import { useState } from 'react'
import useAuthService from '../services/AuthService'

const Signup = () => {
  const { signup, loading, error, user } = useAuthService()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [name, setName] = useState('')
  const [year, setYear] = useState(2000)
  const [month, setMonth] = useState(1)
  const [day, setDay] = useState(1)
  const [phone_number, setPhoneNumber] = useState(1)

  const handleSignup = event => {
    console.log('handleSignup')
    signup({ username, password1, password2, name, birthday: `${year}-${month}-${day}}` })
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
          <IonLabel position="floating">사용자 이름</IonLabel>
          <IonInput
            required="true"
            type="text"
            name="username"
            placeholder="사용자 이름을 입력해주세요."
            value={username}
            onIonChange={event => setUsername(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">비밀번호</IonLabel>
          <IonInput
            required="true"
            autocomplete="true"
            type="password1"
            name="password1"
            placeholder="비밀번호를 입력해주세요."
            value={password1}
            onIonChange={event => setPassword1(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">비밀번호 확인</IonLabel>
          <IonInput
            required="true"
            autocomplete="true"
            type="password2"
            name="password2"
            placeholder="비밀번호를 똑같이 입력해주세요."
            value={password2}
            onIonChange={event => setPassword2(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">사용자 이름</IonLabel>
          <IonInput
            required="true"
            type="text"
            name="username"
            placeholder="사용자 이름을 입력해주세요."
            value={username}
            onIonChange={event => setUsername(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">생년월일</IonLabel>
          <IonInput
            required="true"
            type="text"
            name="username"
            placeholder="사용자 이름을 입력해주세요."
            value={year}
            onIonChange={event => setYear(event.detail.value)}
          />
          <IonInput
            required="true"
            type="text"
            name="username"
            placeholder="사용자 이름을 입력해주세요."
            value={month}
            onIonChange={event => setMonth(event.detail.value)}
          />
          <IonInput
            required="true"
            type="text"
            name="username"
            placeholder="사용자 이름을 입력해주세요."
            value={day}
            onIonChange={event => setDay(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">이메일</IonLabel>
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
          <IonLabel position="floating">휴대전화</IonLabel>
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
