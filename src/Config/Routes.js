import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {Loans, Loaned, LoanDetails} from 'Loan';
import Users from '../User/Users.component';

const Routes = () => {
  const routes = (
    <Switch>
      <Route path="/loans" exact component={Loans} />
      <Route path="/loaned" exact  component={Loaned} />
      <Route path="/loans/:id" exact  component={LoanDetails} />
      <Route path="/users" exact  component={Users} />
      <Route path="/" exact component={Loans} />
      <Redirect to="/" />
    </Switch>
  );
  return routes
}

export default Routes;