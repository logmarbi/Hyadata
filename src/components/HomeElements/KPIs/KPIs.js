import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './KPIs.styles'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Travelers from './Travelers.png';
import Bus from './Bus.png';
import Trails from './Trails.png';

function AutoGrid({ classes }) {

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.card} elevation={4}>
                        <CardContent>
                            <Grid container spacing={0}>
                                <Grid item xs={6}>
                                    <img src={Trails} width="55px" style={{ marginBottom: -2, marginRight: 10 }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className={classes.title}>4</Typography>
                                    <Typography className={classes.pos}>נתיבים</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.card} elevation={4}>
                        <CardContent>
                            <Grid container spacing={0}>
                                <Grid item xs={6}>
                                    <img src={Bus} width="65px" style={{ marginTop: 18 }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className={classes.title}>20</Typography>
                                    <Typography className={classes.pos}>אוטובוסים</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.card} elevation={4}>
                        <CardContent>
                            <Grid container spacing={0}>
                                <Grid item xs={6}>
                                    <img src={Travelers} width="53px" style={{ marginBottom: -2, marginRight: 10 }} />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography className={classes.title}>5K</Typography>
                                    <Typography className={classes.pos}>נוסעים</Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles, { withTheme: true })(AutoGrid);

