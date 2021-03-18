import React from 'react';
import { withStyles } from '@material-ui/core'; 
import styles from './Content.styles';

const Content = ({children, classes}) => (
  <main className={classes.content}>
    <div className={classes.mainContainer}>
      {children}
    </div>
  </main>
);

export default withStyles(styles)(Content);