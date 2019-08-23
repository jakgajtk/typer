import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

// route components
import AppContainer from './pages/App.jsx';

const browserHistory = createBrowserHistory();

const Routes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={AppContainer} />
    </Switch>
  </Router>
);

export default Routes;
