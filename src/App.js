import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import outstagram from './images/outstagram.png'
import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import { useDispatch } from 'react-redux';
import useStyles from './styles'
import { useState, useEffect } from 'react';
import { getPosts } from './actions/posts'

function App() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [currentId, setCurrentId] = useState(null)
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container>
      <AppBar
        position='static'
        color='inherit'
        className={classes.appBar}
      >
        <Typography
          variant='h2'
          align='center'
          className={classes.heading}
        >Outstagram</Typography>
        <img
          src={outstagram}
          alt='outstagram'
          height='60'
          className
          ={classes.image}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
