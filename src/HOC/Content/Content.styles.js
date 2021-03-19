import { colors } from "utils";

const styles = theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: colors.Cultured,
  },
  mainContainer: {
    maxWidth: '935px',
    margin: '64px auto 0',
    padding: '60px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      padding: '20px 16px',
    },
  },
});

export default styles;