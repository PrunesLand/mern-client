import React, { useState, useEffect } from 'react'
import { AppBar, Button, Typography } from '@material-ui/core'
import useStyles from './Styles'

import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'

const Navbar = () => {

    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()

    const logout = () => {
        dispatch({ type: 'LOGOUT' })

        history.push('/')
        setUser(null)
    }

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar
            position='fixed'
            color='inherit'
            className={classes.appBar}
        >
            {user ? (
                <div className={classes.profile}>

                    <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                    <Button variant='contained' className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
            ) : (
                <div className={classes.brandContainer}>
                    <Typography
                        variant='h2'
                        align='center'
                        className={classes.heading}
                        component={Link}
                        to='/'
                    >Outstagram</Typography>
                    <div className={classes.wrapper}>
                        <Button component={Link} to="/auth" variant="contained" color="primary" className={classes.signin}>Sign In</Button>

                    </div>

                </div>

            )}
        </AppBar>
    )
}

export default Navbar
