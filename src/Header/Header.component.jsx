import React, { useContext } from 'react';
import {AppBar, Toolbar, IconButton, Typography, withStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {AppContext} from '../App/Provider';
import styles from './Header.styles';

const Header = ({ classes, handleDrawerToggle }) => {
  const [, setState] = useContext(AppContext);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={() => setState(currentState => ({ ...currentState, mobileOpen: !currentState.mobileOpen}))}
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
}

export default withStyles(styles)(Header);