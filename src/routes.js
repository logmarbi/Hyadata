/* eslint-disable */
import React, { Component, Suspense } from 'react';
import { Router } from '@reach/router'
class App extends Component {

	render() {
		const AsyncPage = React.lazy(() => import('./pages/index'))

		return (
			<Router basename={process.env.PUBLIC_URL}>
				<AsyncPage path="/*" picture="url('/Images/BackgroundTitles/Main.jpg')" />
				<AsyncPage path="Logistics/*" title="לוגיסטיקה" picture="url('/Images/BackgroundTitles/Logistics.jpg')" />
				<AsyncPage path="Chok_vMispat/*" title="חוק ומשפט" picture="url('/Images/BackgroundTitles/Chok_vMispat.jpg')" />
				<AsyncPage path="Mashabim/*" title="משאבים" picture="url('/Images/BackgroundTitles/Mashabim.jpg')" />
				<AsyncPage path="Mashan/*" title='משא"ן' picture="url('/Images/BackgroundTitles/Mashan.jpg')" />
			</Router>
		);
	}
}

export default App;
