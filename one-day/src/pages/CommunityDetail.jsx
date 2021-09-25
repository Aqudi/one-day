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

const CommunityDetail = ({ match, history }) => {
  const { no } = match.params
  const { posts } = useContext(OnedayContext)
  switch (posts.status) {
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
          {posts.data.map((data, idx) =>
            no == data.id ? (
              <IonPage>
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>{data.title}</IonTitle>
                  </IonToolbar>
                </IonHeader>
                <IonContent>
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

export default CommunityDetail
