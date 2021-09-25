import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react'
import './Login.css'

import { useHistory } from 'react-router-dom'
import { useCallback, useState } from 'react'
import { login } from '../api/AuthApi'

const Login = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  //const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [error, setError] = useState('')

  const onClick = useCallback(event => {
    login({ username, password })
      .then(res => {
        console.log(res)
        history.push('/home')
      })
      .catch(error => setError('에러발생!'))
  })

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

        <IonInput
          autocomplete="true"
          type="text"
          name="username"
          value={username}
          placeholder="ID"
          onIonChange={e => setUsername(e.detail.value)}></IonInput>
        <IonInput
          autocomplete="true"
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onIonChange={e => setpassword(e.detail.value)}></IonInput>
        <IonButton type="button" onClick={onClick}>
          로그인
        </IonButton>

        <IonText color="error">{error}</IonText>
      </IonContent>
    </IonPage>
  )
}

export default Login
