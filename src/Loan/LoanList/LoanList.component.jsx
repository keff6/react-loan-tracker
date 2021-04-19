import React from 'react';
import proptypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import {LoanCard} from 'Loan';
import styles from './LoanList.styles';

const LoanList = ({ type, classes, loansData }) => (
  <div className={classes.loansContainer}>
    {loansData.map(loan => <LoanCard type={type} loan={loan} />)}
  </div>
)

LoanList.propTypes = {
  classes: proptypes.object.isRequired,
  loansData: proptypes.array,
  type: proptypes.string,
}

export default withStyles(styles)(LoanList);