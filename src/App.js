import React from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Layout from './HOC/Layout/Layout.component';
import Loans from './Loans/Loans.component';
import Loaned from './Loaned/Loaned.component';
import Users from './Users/Users.component';
import Provider from './App/Provider';

function App() {
  const routes = (
    <Switch>
      <Route path="/loans" exact component={Loans} />
      <Route path="/loaned" exact  component={Loaned} />
      <Route path="/users" exact  component={Users} />
      <Route path="/" exact component={Loans} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Provider>
      <Layout>
        {routes}
      </Layout>
    </Provider>
  );
}

export default withRouter(App);
