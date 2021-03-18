import React from 'react';
import { Router } from 'react-router-dom';
import Layout from './HOC/Layout/Layout.component';
import Provider from './App/Provider';
import Routes from './App/Routes';
import history  from './App/history';

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

export default App;
