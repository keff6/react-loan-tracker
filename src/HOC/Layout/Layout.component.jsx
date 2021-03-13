import React from 'react';
import { withStyles } from '@material-ui/core';
import SideDrawer from '../../Navigation/SideDrawer.component';
import Header from '../../Header/Header.component'; 
import styles from './Layout.styles';

const Layout = ({children, classes}) => (
  <div className={classes.root}>
    <SideDrawer />
    <main className={classes.content}>
      <Header />
      {children}
    </main>
  </div>
);

export default withStyles(styles)(Layout);