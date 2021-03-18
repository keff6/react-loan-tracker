import React from 'react';
import { withStyles } from '@material-ui/core';
import SideDrawer from '../../Navigation/SideDrawer.component';
import Content from '../Content/Content.component'; 
import styles from './Layout.styles';

const Layout = ({children, classes}) => (
  <div className={classes.root}>
    <SideDrawer />
    <Content>
      {children}
    </Content>  
  </div>
);

export default withStyles(styles)(Layout);