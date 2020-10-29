import React from 'react'
import { Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/Search';

function EnterLocations({ classes }) {
    return (
        <>
            <Grid item xs={12} container >
                <Grid item xs={6}>
                    <TextField InputProps={{
                        style: { textAlign: 'center' },
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }} variant="outlined" label="הכנס מקור" className={classes.paper} />

                </Grid>
                <Grid item xs={6}>
                    <TextField InputProps={{
                        style: { textAlign: 'center' },
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }} variant="outlined" label="הכנס יעד" className={classes.paper} />
                </Grid>
            </Grid>
        </>
    )
}

export default EnterLocations
