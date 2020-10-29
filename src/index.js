import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { runApp } from './click/msal'
import App from './App'
import ErrorBoundary from './utils/errorCatch/ErrorBoundary'

import registerServiceWorker from './registerServiceWorker'



(async () => {

  const theme = createMuiTheme({
    shape: {
      borderRadius: 8
    },
    typography: {
      useNextVariants: true
    }
  })

  let myApp = await runApp(<MuiThemeProvider theme={theme}>
    <ErrorBoundary>
      <CssBaseline />
      <App />
    </ErrorBoundary>
  </MuiThemeProvider>);
  console.log("finsih")
  ReactDOM.render(myApp,
    document.getElementById('root'));
})();


registerServiceWorker()



// ReactDOM.render(
//   <MuiThemeProvider theme={theme}>
//     <ErrorBoundary>
//       <CssBaseline />
//       <App />
//     </ErrorBoundary>
//   </MuiThemeProvider>,
//   document.getElementById('root')
// )
// registerServiceWorker()
