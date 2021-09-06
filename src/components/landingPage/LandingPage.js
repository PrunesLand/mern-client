import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { styles } from './Styles'

const LandingPage = () => {

    const classes = styles()

    return (
        <div className={classes.root}>
            <Grid container spacing={1} className={classes.container}>
                <Grid item xs={12}>
                    <Paper className={classes.lrgBox} square>
                        <Typography variant="h1" > Outstagram</Typography>

                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper className={classes.medBox} square>
                        <Typography variant="h3" >Medium Box1</Typography>

                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper className={classes.medBox} square>
                        <Typography variant="h3" >Medium Box2</Typography>

                    </Paper>
                </Grid>

            </Grid>
        </div>
    )
}

export default LandingPage
