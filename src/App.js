import React from 'react';
import { Router } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Layout from './HOC/Layout/Layout.component';
import Provider from './Config/Provider';
import Routes from './Config/Routes';
import history  from './Config/history';
import styles from 'App.styles';

function App() {
  return (
    <Provider>
      <Router history={history}>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </Provider>
  );
}

export default withStyles(styles)(App);
