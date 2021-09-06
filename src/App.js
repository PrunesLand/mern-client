import { Container, createTheme, ThemeProvider } from '@material-ui/core'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Auth from './components/Auth/Auth';
import LandingPage from './components/landingPage/LandingPage';

const theme = createTheme({

  typography: {
    useNextVariants: true,
    fontFamily: 'Poppins',
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
    fontWeightBold: 400,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container>
          <Navbar />
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/auth' exact component={Auth} />
          </Switch>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
