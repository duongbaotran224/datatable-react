import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes'
import { Stats } from './pages'
import { Navigation, Footer } from './components'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch >
          <Route path={ROUTES.ABOUT} render={props => <div>About</div>} />
          <Route path={ROUTES.CONTACT} render={props => <div>Contact</div>} />
          <Route path={ROUTES.STATS} render={props => <Stats />} />
        </Switch>
        <Navigation />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
