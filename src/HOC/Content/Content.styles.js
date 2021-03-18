const styles = theme => ({
  content: {
    flexGrow: 1,
  },
  mainContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '60px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      padding: '40px 16px',
    },
  },
});

export default styles;