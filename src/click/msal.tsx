import React from 'react'
import { AuthenticationParameters } from 'msal'
import {
  msalApp,
  requiresInteraction,
  GRAPH_REQUESTS,
  fetchMsGraph,
  GRAPH_ENDPOINTS,
} from './auth-utils'

let graphProfile = null

const acquireToken = async (
  request: AuthenticationParameters,
  redirect = true
) => {
  return msalApp.acquireTokenSilent(request).catch(async (error: any) => {
    // Call acquireTokenPopup (popup window) in case of acquireTokenSilent failure
    // due to consent or interaction required ONLY
    if (requiresInteraction(error.errorCode)) {
      return redirect
        ? msalApp.acquireTokenRedirect(request)
        : msalApp.acquireTokenPopup(request)
    } else {
      console.error('Non-interactive error:', error.errorCode)
    }
  })
}

export const onSignIn = async (redirect = true) => {
  if (redirect) {
    return msalApp.loginRedirect(GRAPH_REQUESTS.LOGIN)
  }

  const loginResponse = await msalApp
    .loginPopup(GRAPH_REQUESTS.LOGIN)
    .catch((error) => {
      console.log(error)
    })

  if (!loginResponse) {
    return
  }

  await acquireToken(GRAPH_REQUESTS.LOGIN).catch((error) => {
    console.log(error)
  })
}

export const onSignOut = () => {
  msalApp.logout()
}

export const getUserProfileByID = async (id: string) => {
  const token = await acquireToken(GRAPH_REQUESTS.LOGIN)

  if (!token) return undefined
  return await fetchMsGraph(
    GRAPH_ENDPOINTS.USER + `/${id}@idf.il`,
    token.accessToken
  ).catch(() => {
    console.error('Failed')
  })
}

export const runApp = async (app: JSX.Element): Promise<JSX.Element> => {
  console.log("run app")
  msalApp.handleRedirectCallback((authCallback) => {
    console.log(authCallback)
  })

  if (!msalApp.getAccount()) {
    await onSignIn()
  }

  const tokenResponse = await acquireToken(GRAPH_REQUESTS.LOGIN)

  if (!tokenResponse) return <div></div>

  console.log(tokenResponse)


  console.log(tokenResponse.idToken)



  graphProfile = await fetchMsGraph(
    GRAPH_ENDPOINTS.ME,
    tokenResponse.accessToken
  ).catch(() => {
    console.error('Unable to fetch Graph profile.')
  })

  if (graphProfile) {
    console.log(graphProfile)
    // console.log(user)

    return app
  }

  return <div></div>
}
