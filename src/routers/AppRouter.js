import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
// import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
// import AddExpensePage from '../components/AddExpensePage';
// import EditExpensePage from '../components/EditExpensePage';
// import HelpPage from '../components/HelpPage';
// import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HouseDataForm from '../components/HouseDataForm';
import InfoPage from '../components/InfoPage';
import NotFoundPage from '../components/NotFoundPage';
import { Container } from '@material-ui/core';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
        <Switch>
          <Route exact path="/" component={HouseDataForm} />
          <Route path="/help" component={InfoPage} />
          <Route component={NotFoundPage} />
        </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
