import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { OnedayContextProvider } from './context/context'
import useAuthService, { AuthServiceProvider } from './services/AuthService'
import loadable from '@loadable/component'

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

// Lazy route component
function AsyncRoute({ importPath, ...props }) {
  return <Route {...props} component={loadable(importPath)} />
}

// 로그인한 유저만 들어갈 수 있는 Router
function AuthenticatedRoute(props) {
  const { user } = useAuthService()
  if (!user) return <Redirect to="/login" />
  return <AsyncRoute {...props} />
}

// 로그인한 유저만 들어갈 수 있는 Router
function NonAuthenticatedRoute(props) {
  const { user } = useAuthService()
  if (user) return <Redirect to="/home" />
  return <AsyncRoute {...props} />
}

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <AuthServiceProvider>
            <OnedayContextProvider>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
                <NonAuthenticatedRoute
                  exact
                  path="/login"
                  importPath={() => import('./pages/Login')}></NonAuthenticatedRoute>
                <NonAuthenticatedRoute
                  exact
                  path="/signup"
                  importPath={() => import('./pages/Signup')}></NonAuthenticatedRoute>

                <AuthenticatedRoute exact path="/home" importPath={() => import('./pages/Home')}></AuthenticatedRoute>
                <AuthenticatedRoute
                  exact
                  path="/mypage"
                  importPath={() => import('./pages/Mypage')}></AuthenticatedRoute>
                <AuthenticatedRoute
                  exact
                  path="/search"
                  importPath={() => import('./pages/Search')}></AuthenticatedRoute>
                <AuthenticatedRoute exact path="/write" importPath={() => import('./pages/Write')}></AuthenticatedRoute>
                <AuthenticatedRoute
                  exact
                  path="/detail/:no"
                  importPath={() => import('./pages/CommunityDetail')}></AuthenticatedRoute>
                <AsyncRoute
                  exact
                  path="/accomodatedetail/:no"
                  importPath={() => import('./pages/AccomoDetail')}></AsyncRoute>
              </Switch>
            </OnedayContextProvider>
          </AuthServiceProvider>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
}

export default App
