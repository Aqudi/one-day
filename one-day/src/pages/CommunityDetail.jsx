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
const CommunityDetail = ({ match, history }) => {
  const { no } = match.params
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CommunityDetail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">CommunityDetail</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  )
}

export default CommunityDetail
