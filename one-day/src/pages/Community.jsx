import {
  IonButton,
  IonSearchbar,
  IonFooter,
  IonIcon,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { Link } from 'react-router-dom'
const Community = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Community</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Community</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <Link to={`/CommunityDetail/${123}`}></Link>
      </IonContent>
    </IonPage>
  )
}

export default Community
