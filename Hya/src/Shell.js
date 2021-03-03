/* eslint-disable */
import React, { Component, Suspense } from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import Router from './routes'
class App extends Component {

    render() {
        const AsyncPage = React.lazy(() => import('./pages/index'))

        return (

            <>
                <Toolbar />

                <Suspense fallback={<div>Loading...</div>}>
                    <div className="waveWrapper waveAnimation">
                        <Router />
                        <div className="waveWrapperInner bgTop">
                            <div
                                className="wave waveTop"
                                style={{
                                    backgroundImage:
                                        "url('/Images/Waves/wave-top.png')"
                                }}
                            />
                        </div>
                        <div className="waveWrapperInner bgMiddle">
                            <div
                                className="wave waveMiddle"
                                style={{
                                    backgroundImage:
                                        "url('/Images/Waves/wave-top.png')"
                                }}
                            />
                        </div>
                        <div className="waveWrapperInner bgBottom">
                            <div
                                className="wave waveBottom"
                                style={{
                                    backgroundImage:
                                        "url('/Images/Waves/wave-top.png')"
                                }}
                            />
                        </div>
                    </div>

                </Suspense>

                <footer className='footerSettings navbar-fixed-bottom justify-content-start'>
                    <p style={{ display: 'inline', color: 'black', fontSize: 30 }}><a href="   הגדרות"  > הגדרות </a></p>  |
	                <p style={{ display: 'inline', color: 'black', fontSize: 30 }}><a href="   מומלצים עבורי    ">   מומלצים עבורי</a></p>  |
	                <p style={{ display: 'inline', color: 'black', fontSize: 30 }}><a href="   המועדפים שלי    ">   המועדפים שלי</a></p>  |
                   <p style={{ display: 'inline', color: 'black', fontSize: 30 }}><a href="   נצפו לאחרונה">   נצפו לאחרונה</a></p>
                </footer >

                <img src={process.env.PUBLIC_URL + '/Images/Icons/ShacharLogo.png'} className='navbar-fixed-bottom justify-content-start shacharLogo' alt="logo" width="70px" />

            </>
        );
    }
}

export default App;
