/* eslint-disable */

import React from 'react';

import Header from '../components/layout/Header';
import Main from '../components/layout/Main';
import Footer from '../components/layout/Footer';

export default function Layout({ children }) {
	return (
		<div className="body-wrap">
			{children}
		</div>
	);
}
