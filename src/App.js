import { Container } from '@material-ui/core'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Auth from './components/Auth/Auth';
import LandingPage from './components/landingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/auth' exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
