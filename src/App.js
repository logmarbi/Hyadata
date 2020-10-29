import React from 'react'
import { Router } from '@reach/router'
import Home from './pages/Home'
import Login from './pages/Login/Login'
import AuthProvider from './utils/auth/AuthProvider'
import ProtectedRoute from './utils/ProtectedRoute/ProtectedRoute'
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import './App.css'
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () => (
  <AuthProvider>
    <div dir="rtl">
      {/* <StylesProvider jss={jss}> */}
      <Router>
        <ProtectedRoute component={Home} path="/*" />
        <Login path="/login" />
      </Router>
      {/* </StylesProvider> */}
    </div>
  </AuthProvider>
)

export default App
