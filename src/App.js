import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Layout from './HOC/Layout/Layout.component';
import Loans from './Loans/Loans.component';
import Loaned from './Loaned/Loaned.component';
import Users from './Users/Users.component';

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
    <div>
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default withRouter(App);
