import React from 'react'

// import Dashboard from './Dashboard/Dashboard'

// Disabled because of a bug that causes apexcharts not to render initially
const AsyncDashboard = React.lazy(() => import('./Dashboard/Dashboard'))
const AsyncLogistics = React.lazy(() => import('./Hotspots/Hotspots'))
export { AsyncDashboard, AsyncLogistics }
