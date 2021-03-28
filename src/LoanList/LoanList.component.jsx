import React from 'react';
import { withStyles } from '@material-ui/core';
import LoanCard from '../LoanCard/LoanCard.component';
import styles from './LoanList.styles';

const LoanList = ({ type, classes, loansData }) => (
  <div className={classes.loansContainer}>
    {loansData.map(loan => <LoanCard type={type} loan={loan} />)}
  </div>
)

export default withStyles(styles)(LoanList);