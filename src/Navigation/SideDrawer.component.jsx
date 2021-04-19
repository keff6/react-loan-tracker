import React, { useContext } from 'react';
import {
  withStyles,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PeopleIcon from '@material-ui/icons/People';
import InfoIcon from '@material-ui/icons/Info';
import {AppContext} from 'Config/Provider';
import history from 'Config/history';
import styles from './SideDrawer.styles';

const SideDrawer = ({classes, theme, container}) => {
  const [state, setState] = useContext(AppContext);

  const buttons = [
    {
      name: 'Loans',
      icon: <LocalAtmIcon />,
      path: '/loans'
    },
    {
      name: 'Loaned',
      icon: <AccountBalanceIcon />,
      path: '/loaned'
    },
    {
      name: 'Users',
      icon: <PeopleIcon />,
      path: '/users'
    },
    {
      name: 'About',
      icon: <InfoIcon />,
      path: '/users'
    },
  ];

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {buttons.map((btn, index) => (
          <ListItem button key={btn.name} onClick={() => history.push(btn.path)}>
            <ListItemIcon className={classes.buttonLink}>{btn.icon}</ListItemIcon>
            <ListItemText primary={btn.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer}>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={state.mobileOpen}
          onClick={() => setState(currentState => ({ ...currentState, mobileOpen: !currentState.mobileOpen}))}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}

export default withStyles(styles, { withTheme: true })(SideDrawer);

