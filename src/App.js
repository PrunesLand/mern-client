import { createTheme, ThemeProvider } from '@material-ui/core'
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
  },
  palette: {
    primary: {
      main: '#00bfa6',
      dark: '#008e77',
      light: '#5df2d7',

    },
    secondary: {
      main: '#575a89',
      dark: '#2b315c',
      light: '#8587b9',
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>

        <Navbar />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/home' component={Home} />
          <Route path='/auth' component={Auth} />
        </Switch>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
