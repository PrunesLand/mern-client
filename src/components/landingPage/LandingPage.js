import { Button, Container, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { styles } from './Styles'
import { GiThreeFriends } from 'react-icons/gi'
import { BsBellFill } from 'react-icons/bs'
import discussion from '../../images/online_discussion.svg'
import { FaTwitter, FaInstagram, FaFacebookSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const LandingPage = () => {

    const classes = styles()

    return (
        <div className={classes.root}>
            <Grid container spacing={1} className={classes.container}>
                <Grid item xs={12}>
                    <Paper className={classes.lrgBox} square>
                        <Typography variant="h2" className={classes.heroTextLrg}> Share your stories</Typography>
                        <Typography variant='h6' className={classes.heroTextMd}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque cum dolore! Cupiditate fuga numquam quisquam ad odit ea nostrum placeat suscipit molestias.</Typography>
                        <Button variant='outlined' component={Link} to='/home'> <Typography variant="h6" className={classes.mdText}>Get Started</Typography></Button>
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper className={classes.medBox} square>
                        <Typography variant="h3" className={classes.mdText}><GiThreeFriends style={{ fontSize: '3rem', color: '#00bfa6', padding: '3px 0' }} /><br /> Connect With Friends Now!</Typography>

                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper className={classes.medBox} square>
                        <Typography variant="h3" className={classes.mdText}><BsBellFill style={{ fontSize: '3rem', color: '#00bfa6', padding: '3px 0' }} /><br /> Turn on notifications now!</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <Paper className={classes.lrgBox} square>
                        <img src={discussion} alt='online discussion' className={classes.promoImg} />
                        <Typography variant="h4" className={classes.heroTextLrg}>Why Outstagram?</Typography>
                        <Typography variant="h6" className={classes.heroTextMd}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda est iste minus error ipsam architecto dolorum, praesentium numquam nihil? </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <Paper className={classes.lrgBox} square>
                        <Typography>Tell us about your experience!</Typography>
                        <Container className={classes.socialCont}>
                            <Typography variant='body2' className={classes.socials}><FaTwitter style={{ fontSize: '1.2rem', paddingRight: '5px', color: '#179cf0' }} /> @outstagram_twit</Typography>
                            <Typography variant='body2' className={classes.socials}><FaInstagram style={{ fontSize: '1.2rem', paddingRight: '5px', color: '#c934ad' }} /> @outstagram_inst</Typography>
                            <Typography variant='body2' className={classes.socials}><FaFacebookSquare style={{ fontSize: '1.2rem', paddingRight: '5px', color: '#006ce5' }} /> @outstagram_fbk</Typography>
                        </Container>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    )
}

export default LandingPage
