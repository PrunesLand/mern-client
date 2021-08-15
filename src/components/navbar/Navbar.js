import React from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import useStyles from './Styles'
import outstagram from '../../images/outstagram.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const classes = useStyles()

    const user = null

    return (
        <AppBar
            position='static'
            color='inherit'
            className={classes.appBar}
        >
            <div className={classes.brandContainer}>
                <Typography
                    variant='h2'
                    align='center'
                    className={classes.heading}
                    component={Link}
                    to='/'
                >Outstagram</Typography>
                <img
                    src={outstagram}
                    alt='outstagram'
                    height='60'
                    className
                    ={classes.image}
                />
            </div>
            <Toolbar className={classes.toolbar} />
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.results.name} src={user.results.imageUrl}>{user.results.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                    <Button variant='contained' className={classes.logout} color="secondary">Logout</Button>
                </div>
            ) : (
                <Button component={Link} to='/auth' variant='contained' color='primary' >Sign in</Button>
            )}
        </AppBar>
    )
}

export default Navbar
