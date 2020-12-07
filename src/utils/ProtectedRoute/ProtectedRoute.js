import React from 'react'
import { Redirect } from '@reach/router'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import AuthContext from '../auth/AuthContext'

const theme = createMuiTheme({
  direction: "rtl",
  typography: {
    useNextVariants: true
  },
  palette: {
    // type: 'dark',
    primary: {
      // main: '#40916C',
      main: '#397D54',
    },
  },
  shape: {
    borderRadius: 8
  },
  mixins: {
    toolbar: {
      minHeight: 48
    }
  }
})

const darkTheme = createMuiTheme({
  direction: "rtl",
  typography: {
    useNextVariants: true
  },
  palette: {
    type: 'dark',
    primary: {
      // main: '#40916C',
      main: '#397D54',
    },
  },
  shape: {
    borderRadius: 8
  },
  mixins: {
    toolbar: {
      minHeight: 48
    }
  }
})

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    {context => {
      if (context.user.id) {
        return (
          <MuiThemeProvider
            theme={context.user.theme === 'light' ? theme : darkTheme}
          >
            <Component {...rest} />
          </MuiThemeProvider>
        )
      }
      return <Redirect noThrow from="/" to="/login" />
    }}
  </AuthContext.Consumer>
)

export default ProtectedRoute
