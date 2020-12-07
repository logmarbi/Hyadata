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
import { TimePicker, MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { he } from 'date-fns/esm/locale'
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/DeleteSweep';

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

export default function NestedList({ isDrawerOpen, handleDrawerState, parentCallback }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [minTravelers, setMinTravelers] = React.useState('');
    const [maxTravelers, setMaxTravelers] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [selectedHour, setSelectedHour] = React.useState(null);
    const [secondsSelectedDate, secondSetSelectedDate] = React.useState(null);
    const [secondSelectedHour, secondSetSelectedHour] = React.useState(null);
    const [holiday, setHoliday] = React.useState(null);
    const [holidayEvent, setHolidayEvent] = React.useState(null);

    const handleClick = () => {
        setOpen(!open);

        parentCallback(open);

        // setOpen(!open);
        handleDrawerState();

        // if (!isDrawerOpen) {
        //     handleDrawerState();
        //     setOpen(true);
        // } else {
        //     setOpen(!open);
        // }
    };

    function clearTravelers() {
        setMinTravelers('');
        setMaxTravelers('');
    }

    function clearTime() {
        setSelectedDate(null);
        setSelectedHour(null);
        secondSetSelectedDate(null);
        secondSetSelectedHour(null);
    }

    function clearHolidays() {
        setHoliday(null);
        setHolidayEvent(null);
    }

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
                <ListItemText style={{ textAlign: "center" }} primary="מסננים" />
                {(open && isDrawerOpen) ? <ExpandLess /> : <ExpandMore />}
            </CustomListItem>
            <Collapse in={!isDrawerOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding >



                    <ListItemText primary={<Typography style={{ color: "white", marginRight: 15, fontSize: +18 }}>נוסעים</Typography>}
                        style={{
                            background: 'linear-gradient(to right, hsla(0, 100%, 90%, 0), #397D54'
                            // background: 'linear-gradient(to right, hsla(0, 100%, 90%, 0), #40916C'
                        }} />

                    <ListItemText primary={<Typography style={{ marginRight: 15 }}>
                        {/* <TransferWithinAStationIcon />|  */}כמות נוסעים</Typography>} style={{
                            float: "right"
                        }} />
                    <ListItemText primary={<IconButton onClick={clearTravelers} aria-label="delete"><ClearIcon /></IconButton>} style={{ float: "left", marginBottom: -30 }} />

                    <CustomListItem className={classes.nested} style={{
                        marginTop: -20
                    }}>

                        <Grid container spacing={6} style={{
                            marginRight: -40
                        }}>
                            <Grid item xs={6}>
                                <TextField size="small"
                                    value={minTravelers}
                                    onChange={e => setMinTravelers(e.target.value)}
                                    style={{ minWidth: 110 }}
                                    variant="outlined" label="מינימלי" className={classes.paper} />

                            </Grid>
                            <Grid item xs={6}>
                                <TextField size="small"
                                    value={maxTravelers}
                                    onChange={e => setMaxTravelers(e.target.value)}
                                    style={{ minWidth: 110 }}
                                    variant="outlined" label="מקסימלי" className={classes.paper} />
                            </Grid>
                        </Grid>

                    </CustomListItem>






                    <ListItemText primary={<Typography style={{ color: "white", marginRight: 15, fontSize: +18 }}>זמן</Typography>}
                        style={{
                            background: 'linear-gradient(to right, hsla(0, 100%, 90%, 0), #397D54'
                            // background: 'linear-gradient(to right, hsla(0, 100%, 90%, 0), #40916C'
                        }} />

                    <ListItemText primary={<Typography style={{ marginRight: 15 }}>
                        {/* <Event />|  */}
                        טווח תאריכים</Typography>} style={{
                            float: "right"
                        }} />
                    <ListItemText primary={<IconButton onClick={clearTime} aria-label="delete"><ClearIcon /></IconButton>} style={{ float: "left", marginBottom: -25 }} />


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
                                        size="small"
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
                                        size="small"
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

                    <ListItemText primary={<Typography style={{
                        marginRight: 15,
                    }}>
                        {/* <Time />|  */}
                    טווח שעות</Typography>} style={{
                            float: "right",
                            marginBottom: -400,
                        }} />


                    <CustomListItem className={classes.nested} style={{

                    }}>

                        <Grid container spacing={6} style={{
                            marginRight: -40
                        }}>
                            <Grid item xs={6}>

                                <MuiPickersUtilsProvider locale={he}
                                    utils={DateFnsUtils}
                                    padding={10} margin={5}>
                                    <TimePicker
                                        size="small"
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
                                        className={classes.timeControl}

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
                                        size="small"
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
                                        className={classes.timeControl}

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






                    <ListItemText primary={<Typography style={{ color: "white", marginRight: 15, fontSize: +18 }}>חגים ומועדים</Typography>}
                        style={{
                            background: 'linear-gradient(to right, hsla(0, 100%, 90%, 0), #397D54',
                            // background: 'linear-gradient(to right, hsla(0, 100%, 90%, 0), #40916C',
                            marginTop: -10
                        }} />

                    <ListItemText primary={<IconButton onClick={clearHolidays} aria-label="delete"><ClearIcon /></IconButton>} style={{ float: "left", marginBottom: -55 }} />


                    <CustomListItem className={classes.nested} style={{
                    }}>
                        <FormControl className={classes.formControl} value={holiday} onChange={setHoliday}>
                            <InputLabel id="demo-simple-select-label">שם החג/מועד</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                            >
                                <MenuItem value={0}>ראש השנה</MenuItem>
                                <MenuItem value={1}>יום הזיכרון</MenuItem>
                                <MenuItem value={2}>יום העצמאות</MenuItem>
                                <MenuItem value={3}>יום כיפור</MenuItem>
                                <MenuItem value={4}>ט"ו בשבט</MenuItem>
                                <MenuItem value={5}>יום השואה והגבורה</MenuItem>
                                <MenuItem value={6}>יום ירושלים</MenuItem>
                                <MenuItem value={7}>שבועות</MenuItem>
                                <MenuItem value={8}>ל"ג-בעומר</MenuItem>
                                <MenuItem value={9}>חנוכה</MenuItem>
                                <MenuItem value={10}>תשעה באב</MenuItem>
                                <MenuItem value={11}>פורים</MenuItem>
                                <MenuItem value={12}>סוכות</MenuItem>
                                <MenuItem value={13}>פסח</MenuItem>
                                <MenuItem value={14}>שמחת תורה</MenuItem>
                            </Select>
                            {/* <FormHelperText>שם החג/מועד</FormHelperText> */}
                        </FormControl>
                    </CustomListItem>

                    <CustomListItem className={classes.nested} style={{
                        marginTop: -50
                    }}>
                        <FormControl className={classes.formControl} value={holidayEvent} onChange={setHolidayEvent}>
                            <InputLabel id="demo-simple-select-label">תקופה בחג/מועד</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            {/* <FormHelperText>תקופה בחג/מועד</FormHelperText> */}
                        </FormControl>
                    </CustomListItem>

                </List>
            </Collapse>
        </List >
    );
}