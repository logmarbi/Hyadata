import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import FilterListIcon from '@material-ui/icons/FilterList';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import { TimePicker, MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { he } from 'date-fns/esm/locale'
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import Event from '@material-ui/icons/Event';
import Time from '@material-ui/icons/QueryBuilder';

const CustomListItem = withStyles(({ spacing }) => ({
    root: {
        paddingTop: spacing.unit * 2 + 4,
        paddingBottom: spacing.unit * 2 + 4,
        paddingRight: spacing.unit * 3,
        paddingLeft: spacing.unit * 3
    }
}))(ListItem)

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 170,
    },
    timeControl: {
        // margin: theme.spacing(2),
        minWidth: 110,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function NestedList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedHour, setSelectedHour] = React.useState(null);
    const [secondsSelectedDate, secondSetSelectedDate] = React.useState(new Date());
    const [secondSelectedHour, secondSetSelectedHour] = React.useState(null);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
        >
            <CustomListItem button onClick={handleClick}>
                <ListItemIcon>
                    <FilterListIcon />
                </ListItemIcon>
                <ListItemText primary="מסננים" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </CustomListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>



                    <ListItemText primary={<Typography style={{ marginRight: 15, fontSize: +18 }}>נוסעים</Typography>}
                        style={{
                            background: 'linear-gradient(to right, hsla(0, 100%, 90%, 0), rgb(63 81 181)'
                        }} />

                    <ListItemText primary={<Typography style={{ marginRight: 15 }}>כמות נוסעים</Typography>} style={{
                        float: "right"
                    }} />
                    <ListItemText primary={<Typography style={{ marginLeft: 15 }}>נקה מסנן</Typography>} style={{
                        float: "left"
                    }} />

                    <CustomListItem className={classes.nested} style={{
                        marginTop: -20
                    }}>

                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <TextField InputProps={{
                                    style: { textAlign: 'center' },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <TransferWithinAStationIcon />
                                        </InputAdornment>
                                    ),
                                }} variant="outlined" label="מינימלי" className={classes.paper} />

                            </Grid>
                            <Grid item xs={6}>
                                <TextField InputProps={{
                                    style: { textAlign: 'center' },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <TransferWithinAStationIcon />
                                        </InputAdornment>
                                    ),
                                }} variant="outlined" label="מקסימלי" className={classes.paper} />
                            </Grid>
                        </Grid>

                    </CustomListItem>






                    <ListItemText primary={<Typography style={{ marginRight: 15, fontSize: +18 }}>זמן</Typography>}
                        style={{
                            background: 'linear-gradient(to right, hsla(0, 100%, 90%, 0), rgb(63 81 181)'
                        }} />

                    <ListItemText primary={<Typography style={{ marginRight: 15 }}>טווח תאריכים</Typography>} style={{
                        float: "right"
                    }} />
                    <ListItemText primary={<Typography style={{ marginLeft: 15 }}>נקה מסנן</Typography>} style={{
                        float: "left"
                    }} />

                    <CustomListItem className={classes.nested} style={{
                        marginTop: -20
                    }}>


                        <Grid container spacing={6} style={{
                            marginRight: -40
                        }}>
                            <Grid item xs={6}>
                                <MuiPickersUtilsProvider locale={he}
                                    utils={DateFnsUtils}
                                    padding={10} margin={5}>

                                    <DatePicker
                                        label="מ-"
                                        value={selectedDate}
                                        onChange={setSelectedDate}
                                        format="dd/MM/yyyy"
                                        inputVariant="outlined"
                                        className={classes.timeControl}
                                    />
                                </MuiPickersUtilsProvider>

                            </Grid>
                            <Grid item xs={6}>
                                <MuiPickersUtilsProvider locale={he}
                                    utils={DateFnsUtils}
                                    padding={10} margin={5}>

                                    <DatePicker
                                        label="עד"
                                        value={secondsSelectedDate}
                                        onChange={secondSetSelectedDate}
                                        format="dd/MM/yyyy"
                                        inputVariant="outlined"
                                        className={classes.timeControl}
                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>
                        </Grid>

                    </CustomListItem>

                    <ListItemText primary={<Typography style={{ marginRight: 15 }}>טווח שעות</Typography>} style={{
                        float: "right"
                    }} />


                    <CustomListItem className={classes.nested} style={{
                        marginTop: -20
                    }}>

                        <Grid container spacing={3}>
                            <Grid item xs={6}>

                                <MuiPickersUtilsProvider locale={he}
                                    utils={DateFnsUtils}
                                    padding={10} margin={5}>
                                    <TimePicker
                                        value={selectedHour}
                                        onChange={setSelectedHour}
                                        views={["hours"]}
                                        margin="normal"
                                        id="time-picker"
                                        ampm={false}
                                        format="HH:00"
                                        label="מ-"
                                        inputVariant="outlined"
                                        clearable
                                        valueDefault={null}

                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>

                            </Grid>
                            <Grid item xs={6}>
                                <MuiPickersUtilsProvider locale={he}
                                    utils={DateFnsUtils}
                                    padding={10} margin={5}>
                                    <TimePicker
                                        // InputProps={{
                                        //     style: { textAlign: 'center' },
                                        //     startAdornment: (
                                        //         <InputAdornment position="start">
                                        //             <Time />
                                        //         </InputAdornment>
                                        //     ),
                                        // }}
                                        value={secondSelectedHour}
                                        onChange={secondSetSelectedHour}
                                        views={["hours"]}
                                        margin="normal"
                                        id="time-picker"
                                        format="HH:00"
                                        ampm={false}
                                        label="עד "
                                        inputVariant="outlined"
                                        clearable
                                        valueDefault={null}

                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                                {/* <TextField InputProps={{
                                    style: { textAlign: 'center' },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Time />
                                        </InputAdornment>
                                    ),
                                }} variant="outlined" label="עד" className={classes.paper} /> */}
                            </Grid>
                        </Grid>
                    </CustomListItem>






                    <ListItemText primary={<Typography style={{ marginRight: 15, fontSize: +18 }}>חגים ומועדים</Typography>}
                        style={{
                            background: 'linear-gradient(to right, hsla(0, 100%, 90%, 0), rgb(63 81 181)'
                        }} />

                    <ListItemText primary={<Typography style={{ marginLeft: 15, marginBottom: -30 }}>נקה מסנן</Typography>} style={{
                        float: "left"
                    }} />

                    <CustomListItem className={classes.nested} style={{
                        marginTop: -50
                    }}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">בחר</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <FormHelperText>שם החג/מועד</FormHelperText>
                        </FormControl>
                    </CustomListItem>

                    <CustomListItem className={classes.nested} style={{
                        marginTop: -50
                    }}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">בחר</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <FormHelperText>תקופה בחג/מועד</FormHelperText>
                        </FormControl>
                    </CustomListItem>

                </List>
            </Collapse>
        </List >
    );
}