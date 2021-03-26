import React from 'react';
import { withStyles } from '@material-ui/core';
import Header from '../Header/Header.component'
import { loans } from 'utils';
import styles from './LoanDetails.styles';

/*
    loaner: 'Kevin Fallas', // should be related to user table in the future
    debtor: 'Jose Chinchilla', // should be related to user table in the future
    contractDate: '01/01/2021',
    currency: 'colones',
    totalLoan: 100000,
    totalPaid: 40000,
    periodicity: null,
    payments: [
      {
        date: '02/02/2021',
        amount: 5000,
      },
      {
        date: '02/02/2021',
        amount: 5000,
      }
    ]
  }
*/

const LoanDetails = ({classes}) => {
  const loan = loans[0];
  return (
    <>
      <Header title="My Loans / Loan Details"/>
      <div className={classes.container}>
        <p><span className={classes.label}>Loaner:</span>{loan.loaner}</p>
        <p><span className={classes.label}>Debtor:</span>{loan.debtor}</p>
        <p><span className={classes.label}>Contract Date:</span>{loan.contractDate}</p>
        <p><span className={classes.label}>Currency:</span>{loan.currency}</p>
        <p><span className={classes.label}>Total Loan:</span>{loan.totalLoan}</p>
        <p><span className={classes.label}>Total Paid:</span>{loan.totalPaid}</p>
        <p><span className={classes.label}>Periodicity:</span>{loan.periodicity}</p>
        <p><span className={classes.label}>Interest Rate:</span>{loan.interestRate}</p>
        <br />
        <h3>Payments</h3> 
      </div>
    </>
  )
}

export default withStyles(styles)(LoanDetails);