import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import SwitchIcon from '@material-ui/icons/SyncAlt';

function EnterLocations({ classes }) {

    const [sourceStation, setSourceStation] = useState('')
    const [destinationStation, setDestinationStation] = useState('')

    function SwitchLocations() {
        let tempSource = sourceStation;
        setSourceStation(destinationStation);
        setDestinationStation(tempSource);
    }

    return (
        <>
            <Grid item xs={12} container style={{
                marginBottom: -20, marginTop: -10, display: 'flex',
                alignItems: 'center'
            }}>
                <Grid item xs={5}>

                    {/* <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}> */}
                    <TextField value={sourceStation} onChange={e => setSourceStation(e.target.value)} InputProps={{
                        style: { textAlign: 'center', marginRight: -20, minWidth: 170 },
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }} variant="outlined" size="small" label="הכנס מקור" className={classes.paper} />
                    {/* <AccountCircle /> */}

                    {/* </div> */}
                </Grid>
                <Grid item xs={1} ><IconButton aria-label="delete" onClick={SwitchLocations}><SwitchIcon /></IconButton></Grid>

                <Grid item xs={5}>
                    <TextField value={destinationStation} onChange={e => setDestinationStation(e.target.value)} InputProps={{
                        style: {
                            textAlign: 'center', minWidth: 170, marginLeft: -20
                        },
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }} variant="outlined" size="small" label="הכנס יעד" className={classes.paper} />
                </Grid>
            </Grid>
        </>
    )
}

export default EnterLocations
