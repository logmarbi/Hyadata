import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import Chart from '../../components/Charts/Charts'
import PageHeader from '../../components/PageLayout/PageHeader'
import PageWrapper from '../../components/PageLayout/PageWrapper'
import styles from './Dashboard.styles'
import { spark, bar } from './charts'

import DaysPick from '../../components/HomeElements/DaysPick'
import EnterLocations from '../../components/HomeElements/EnterLocations'
import Map from '../../components/Map/Map'
import KPIs from '../../components/HomeElements/KPIs/KPIs'
function Dashboard({ title, classes, theme }) {
  return (
    <>
      <PageHeader title={title} />
      <PageWrapper>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid container xs={5}>
              <Grid container >
                <EnterLocations classes={classes} />
                <Grid item xs={12}>
                  <DaysPick classes={classes} />
                </Grid>
                {/* <p dir="ltr"> */}
                <Grid className={classes.paper} item xs={12} spacing={0}>
                  <Paper className={classes.paper}>
                    <Chart type="bar" {...bar(theme)} />
                  </Paper>
                </Grid>
                {/* </p> */}
                <Grid className={classes.paper} item xs={12} spacing={0}>
                  <Paper className={classes.paper}>
                    <Chart type="bar" {...bar(theme)} />
                  </Paper>                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={7} >
              <Grid container xs={12} spacing={0}>
                <KPIs />
              </Grid>
              <Grid item xs={12} spacing={0}>
                <Paper className={classes.paper}>
                  <Map />
                </Paper>
              </Grid>

            </Grid>
            {/* <Grid item xs={12} md={4} xl={2}>
              <Paper className={classes.paper}>
                <Chart type="radialBar" {...radialBar(theme)} />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={5}>
              <Paper className={classes.paper}>
                <Chart type="line" {...line(theme)} />
              </Paper>
            </Grid> */}
          </Grid>
        </div>
      </PageWrapper>
    </>
  )
}

export default withStyles(styles, { withTheme: true })(Dashboard)
