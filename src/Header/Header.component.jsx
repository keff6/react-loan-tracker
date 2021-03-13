import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, withStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './Header.styles';

const Header = ({ classes, handleDrawerToggle }) => (
  <AppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" noWrap>
        Responsive drawer
      </Typography>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header);