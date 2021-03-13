import { colors } from 'utils';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    color: colors.White,
    backgroundColor: colors.DarkSlateGray,
  },
  buttonLink: {
    color: colors.White,
  },
});

export default styles;