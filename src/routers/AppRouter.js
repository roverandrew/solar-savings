import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import InfoPage from '../components/InfoPage';
import NotFoundPage from '../components/NotFoundPage';
import SavingsDashboardPage from '../components/SavingsDashboardPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
        <Switch>
          <Route exact path="/" component={SavingsDashboardPage} />
          <Route path="/help" component={InfoPage} />
          <Route component={NotFoundPage} />
        </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
