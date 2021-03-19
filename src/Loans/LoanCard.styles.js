import { colors } from 'utils';

const styles = theme => ({
  cardHeader: {
    backgroundColor: colors.Emerald,
    color: colors.White,
  },
  loanerName: {
    margin: '5px',
    '& svg': {
      verticalAlign: 'middle',
      height: '20px',
      width: '20px',
    },
    '& span': {
      marginLeft: '16px',
    },
  }
});

export default styles;