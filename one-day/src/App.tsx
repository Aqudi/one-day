import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

/* Pages */
import Home from './pages/Home'
import Login from './pages/Login'
import Detail from './pages/Detail'
import Search from './pages/Search'
import Community from './pages/Community'
import Communitydetail from './pages/CommunityDetail'
import Mypage from './pages/Mypage'
import Write from './pages/Write'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

import './App.css'

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" exact component={Home} />
        <Home />
        <Route path="/" exact component={Home}>
          <Redirect to="/home" />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="">
          <Detail></Detail>
        </Route>
        <Route exact path="/search">
          <Search></Search>
        </Route>
        <Route exact path={['/@:username', '/']} exact/>
          <Community></Community>
        </Route>
        <Route exact path="/@:username/:postId">
          <Communitydetail></Communitydetail>
        </Route>
        <Route exact path="">
          <Mypage></Mypage>
        </Route>
        <Route exact path="">
          <Write></Write>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App
