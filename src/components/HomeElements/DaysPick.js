import React from 'react'
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/Button';

function DaysPick({ classes }) {
    return (
        <>
            <Card elevation={4}>
                <CardContent >
                    {/* <Typography style={{
                            flexGrow: 1,
                            align: "center",
                            justify: "center",
                            justifyContent: "center",
                            display: 'justify',
                            textAlign: "center",
                            marginBottom: 10
                        }} >
                            סינון ימים
                        </Typography> */}
                    {/* <div> */}
                    <ButtonGroup size="small" aria-label="small outlined button group" style={{ marginBottom: -10, width: "-webkit-fill-available" }} variant="contained" color="primary" aria-label="contained primary button group">
                        <Button size="small" style={{ color: "white", minWidth: 60 }}>ראשון</Button>
                        <Button size="small" style={{ color: "white", minWidth: 60 }}>שני</Button>
                        <Button size="small" style={{ color: "white", minWidth: 60 }}>שלישי</Button>
                        <Button size="small" style={{ color: "white", minWidth: 60 }}>רביעי</Button>
                        <Button size="small" style={{ color: "white", minWidth: 60 }}>חמישי</Button>
                        <Button size="small" style={{ color: "white", minWidth: 60 }} >שישי</Button>
                        <Button size="small" style={{ color: "white", minWidth: 60 }} >שבת</Button>
                    </ButtonGroup>
                    {/* </div> */}
                </CardContent>
            </Card>
        </>
    )
}

export default DaysPick
