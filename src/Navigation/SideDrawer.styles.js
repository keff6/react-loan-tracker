import { colors } from 'utils';

const drawerWidth = 210;

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
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