import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import Chart from '../../components/Charts/Charts'
import PageHeader from '../../components/PageLayout/PageHeader'
import PageWrapper from '../../components/PageLayout/PageWrapper'
import styles from './Dashboard.styles'
import { DaysBar, HoursBar } from './charts'

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
          <Grid container spacing={0}>
            <Grid container xs={5}>
              <Grid container   >
                <EnterLocations
                  classes={classes} />
                <Grid
                  className={classes.paper}
                  style={{
                    marginTop: 5, marginRight: -10,
                  }}
                  item xs={12}>
                  <DaysPick classes={classes} />
                </Grid>
                {/* <p dir="ltr"> */}
                <Grid className={classes.chartPaper}
                  style={{ marginRight: -8 }}
                  item xs={12} spacing={0}>
                  <Paper
                    style={{
                      marginTop: -10,
                      marginBottom: -15
                    }}
                    className={classes.chartPaper}>
                    <Chart type="bar" {...DaysBar(theme)} />
                  </Paper>
                </Grid>
                {/* </p> */}
                <Grid className={classes.chartPaper}
                  style={{ marginRight: -8 }}
                  item xs={12} spacing={0}>
                  <Paper className={classes.chartPaper}>
                    <Chart type="bar" {...HoursBar(theme)} />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={7} >
              <Grid container xs={12} spacing={0} style={{ marginTop: -25 }}
              >
                <KPIs />
              </Grid>
              <Grid item xs={12} >
                <Paper className={classes.paper} >
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
