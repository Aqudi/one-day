import { Link } from 'react-router-dom'
import Loading from '../components/loading'
import { useEffect, useState, useContext } from 'react'
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonIcon,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
  IonFooter,
} from '@ionic/react'
import { OnedayContext } from '../context/context'

const Accomodate = () => {
  const { accomodate } = useContext(OnedayContext)
  useEffect(() => {
    console.log(accomodate)
  }, [])

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
          {accomodate.data.map((data, idx) => (
            <Link to={`/accomodatedetail/${data.id}`} style={{ textDecoration: 'none' }}>
              <div>
                <IonCard>
                  <IonCardContent>
                    <img src={data.image}></img>
                  </IonCardContent>
                  <IonCardHeader>{data.title}</IonCardHeader>
                  <IonCardContent>{data.content}</IonCardContent>
                </IonCard>
              </div>
            </Link>
          ))}
        </>
      )
  }
}

export default Accomodate
