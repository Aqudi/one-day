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
import { useContext } from 'react'
import { OnedayContext } from '../context/context'
import Loading from '../components/loading'

const AccomoDetail = ({ match, history }) => {
  const { no } = match.params
  const { accomodate } = useContext(OnedayContext)
  switch (accomodate.status) {
    case 'pending':
      return (
        <div>
          <Loading />
        </div>
      )
    case 'idle':
      return (
        <div>
          <Loading />
        </div>
      )
    case 'rejected':
      return (
        <div>
          <Loading />
        </div>
      )
    default:
      return (
        <>
          {accomodate.data.map((data, idx) =>
            no == data.id ? (
              <IonPage>
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>{data.title}</IonTitle>
                  </IonToolbar>
                </IonHeader>
                <IonContent>
                  <img src={data.image}></img>
                  {data.created.slice(0, 10)}
                  <p>{data.content}</p>
                </IonContent>
              </IonPage>
            ) : (
              <></>
            )
          )}
        </>
      )
  }
}

export default AccomoDetail
