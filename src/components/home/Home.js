import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid, makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import Posts from '../posts/Posts'
import Form from '../form/Form'
import { getPosts } from '../../actions/posts'

const styles = makeStyles((theme) => {
    return {
        toolbar: {
            height: '8vh',
            [theme.breakpoints.up('sm')]: {
                height: '7vw'
            }
        }
    }
})

const Home = () => {
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)
    const classes = styles()
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>
                <div className={classes.toolbar}></div>
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
