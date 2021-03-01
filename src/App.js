import React from 'react'
import { Router } from '@reach/router'
import Home from './pages/Home'
import AuthProvider from './utils/auth/AuthProvider'
import ProtectedRoute from './utils/ProtectedRoute/ProtectedRoute'
import { create } from 'jss';
import rtl from 'jss-rtl';
import { jssPreset } from '@material-ui/core/styles';
import './App.css'
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const App = () => (
  <AuthProvider>
    <div dir="rtl">
      <Router>
        <ProtectedRoute Component={Home} path="/*" />
      </Router>
    </div>
  </AuthProvider>
)


export default App
