/* eslint-disable */
import React from 'react'
import NavigationTransition from './NavigationTransition'
import { Link } from '@reach/router'


export default function Navigation() {
  return (
    <nav className=' navbar navbar-default navbar-fixed-top' id='menu' style={{ width: '100%', }}>

      <Link to="/" className="page-scroll">
        <a className='navbar-brand pull-right' style={{fontSize: 36, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}  >הֲיָדַאְטׇּּּּהֲ</a>

      </Link>

      <div className="flex-container">
        <div
        >
          <NavigationTransition />
        </div>
      </div>
    </nav>
  );
}
