import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loans from '../Loans/Loans.component';
import Loaned from '../Loaned/Loaned.component';
import Users from '../Users/Users.component';

const Routes = () => {
  const routes = (
    <Switch>
      <Route path="/loans" exact component={Loans} />
      <Route path="/loaned" exact  component={Loaned} />
      <Route path="/users" exact  component={Users} />
      <Route path="/" exact component={Loans} />
      <Redirect to="/" />
    </Switch>
  );
  return routes
}

export default Routes;