import { Link } from 'react-router-dom'
import Loading from '../components/loading'
import './components.css'
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

const Information = () => {
  const { posts } = useContext(OnedayContext)
  useEffect(() => {
    console.log(posts)
  }, [])

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
            data.category == 0 ? (
              <Link to={`/detail/${data.id}`} style={{ textDecoration: 'none' }}>
                <div>
                  <IonCard>
                    <IonCardHeader>
                      <span className="title">{data.title}</span>
                    </IonCardHeader>
                    <IonCardContent>{data.content}</IonCardContent>
                  </IonCard>
                </div>
              </Link>
            ) : (
              <></>
            )
          )}
        </>
      )
  }
}

export default Information
