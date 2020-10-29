import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './KPIs.styles'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

function AutoGrid({ classes }) {

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.card} elevation={4}>
                        <CardContent >
                            <Typography className={classes.title}>4</Typography>
                            <Typography variant="h5" component="h2">
                            </Typography>
                            <Typography className={classes.pos}>נתיבים</Typography>
                        </CardContent>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.card} elevation={4}>
                        <CardContent>
                            <Typography className={classes.title}>20</Typography>
                            <Typography variant="h5" component="h2">
                            </Typography>
                            <Typography className={classes.pos}>אוטובוסים</Typography>
                        </CardContent>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.card} elevation={4}>
                        <CardContent>
                            <Typography className={classes.title}>5K</Typography>
                            <Typography variant="h5" component="h2">
                            </Typography>
                            <Typography className={classes.pos}>נוסעים</Typography>
                        </CardContent>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default withStyles(styles, { withTheme: true })(AutoGrid);

