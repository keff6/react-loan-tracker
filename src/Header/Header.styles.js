import { colors } from 'utils';

const drawerWidth = 210;

const styles = theme => ({
  appBar: {
    marginLeft: drawerWidth,
    backgroundColor: colors.Tasman,
    color: colors.DarkSlateGray,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    color: colors.DarkSlateGray,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  title: {
    marginLeft: '20px',
    color: colors.DarkSlateGray,
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
});

export default styles;