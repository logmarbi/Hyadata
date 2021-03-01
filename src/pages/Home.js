import React, { Suspense, useState, useContext } from 'react'
import { Router } from '@reach/router'
import { withStyles } from '@material-ui/core/styles'
import { AsyncDashboard, AsyncLogistics, } from './index'
import styles from './Home.styles'
import Toolbar from '../components/Toolbar/Toolbar'




function Home({ classes }) {

  return (

    <>
      <Toolbar />

      <main className={classes.content}>

        <Suspense fallback={<div>Loading...</div>}>
          <div className="waveWrapper waveAnimation">
            <Router>
              <AsyncDashboard path="/*" title="Dashboard" />
              <AsyncLogistics path="Logistics/*" picture="url('/Images/BackgroundTitles/Logistics.jpg')" />
              <AsyncLogistics path="Chok_vMispat/*" picture="url('/Images/BackgroundTitles/Chok_vMispat.jpg')" />
              <AsyncLogistics path="Mashabim/*" picture="url('/Images/BackgroundTitles/Mashabim.jpg')" />
              <AsyncLogistics path="Mashan/*" picture="url('/Images/BackgroundTitles/Mashan.jpg')" />
            </Router>
            <div className="waveWrapperInner bgTop">
              <div
                className="wave waveTop"
                style={{
                  backgroundImage: "url('/Images/Waves/wave-top.png')"
                }}
              />
            </div>
            <div className="waveWrapperInner bgMiddle">
              <div
                className="wave waveMiddle"
                style={{
                  backgroundImage: "url('/Images/Waves/wave-top.png')"
                }}
              />
            </div>
            <div className="waveWrapperInner bgBottom">
              <div
                className="wave waveBottom"
                style={{
                  backgroundImage: "url('/Images/Waves/wave-top.png')"
                }}
              />
            </div>
          </div>

        </Suspense>
      </main>


      <footer className='footerSettings navbar-fixed-bottom justify-content-start'>
        <p style={{ display: 'inline', color: 'black', fontSize: 30 }}><a href="   הגדרות"  > הגדרות </a></p>  |
			<p style={{ display: 'inline', color: 'black', fontSize: 30 }}><a href="   מומלצים עבורי    ">   מומלצים עבורי</a></p>  |
			<p style={{ display: 'inline', color: 'black', fontSize: 30 }}><a href="   המועדפים שלי    ">   המועדפים שלי</a></p>  |
			<p style={{ display: 'inline', color: 'black', fontSize: 30 }}><a href="   נצפו לאחרונה">   נצפו לאחרונה</a></p>
      </footer >

      <img src={process.env.PUBLIC_URL + '/Images/Icons/ShacharLogo.png'} className='navbar-fixed-bottom justify-content-start shacharLogo' alt="logo" width="70px" />

    </>
  )
}

export default withStyles(styles, { withTheme: true })(Home)
