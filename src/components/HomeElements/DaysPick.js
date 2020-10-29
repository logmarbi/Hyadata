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
            <Grid container spacing={2} >
                <Card elevation={4}>
                    <CardContent>
                        <Typography className={{
                            flexGrow: 1,
                            textAlign: 'center',
                            align: "center",
                            justifyContent: "center"
                        }} >
                            סינון ימים
                        </Typography>
                        <div>
                            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                                <Button size="small">ראשון</Button>
                                <Button size="small">שני</Button>
                                <Button size="small">שלישי</Button>
                                <Button size="small">רביעי</Button>
                                <Button size="small">חמישי</Button>
                                <Button size="small">שישי</Button>
                                {/* <Button size="small">שבת</Button> */}
                            </ButtonGroup>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default DaysPick
