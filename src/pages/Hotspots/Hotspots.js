import React, { Fragment } from 'react'
import PageHeader from '../../components/PageLayout/PageHeader'
import PageWrapper from '../../components/PageLayout/PageWrapper'
import Map from '../../components/Map/Map'

function Hotspots({ title }) {
  return (
    <Fragment>
      <PageHeader title={title} />
      <PageWrapper>
        <Map />
      </PageWrapper>
    </Fragment>
  )
}

export default Hotspots
