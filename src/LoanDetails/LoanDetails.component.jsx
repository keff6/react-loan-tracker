import React from 'react';
import { withStyles, Button, Divider } from '@material-ui/core';
import Header from '../Header/Header.component'
import { loans } from 'utils';
import history from '../Config/history';
import ReportPaymentForm from '../Common/ReportPaymentForm/ReportPaymentForm.component';
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
      <div className={classes.actionsContainer}>
        <Button color="primary" onClick={() => history.goBack()}>Back</Button>
        <ReportPaymentForm />       
      </div>
      <div className={classes.container}>
        <p><span className={classes.label}>Loaner:</span>{loan.loaner}</p>
        <p><span className={classes.label}>Debtor:</span>{loan.debtor}</p>
        <p><span className={classes.label}>Contract Date:</span>{loan.contractDate}</p>
        <p><span className={classes.label}>Currency:</span>{loan.currency}</p>
        <p><span className={classes.label}>Total Loan:</span>{loan.totalLoan}</p>
        <p><span className={classes.label}>Payments to date:</span>5</p>
        <p><span className={classes.label}>Total Paid:</span>{loan.totalPaid}</p>
        <p><span className={classes.label}>Current Debt:</span>60 000 (40%)</p>
        <p><span className={classes.label}>Periodicity:</span>{loan.periodicity}</p>
        <p><span className={classes.label}>Interest Rate:</span>{loan.interestRate}</p>
        <Divider />
        <h3>Payment History</h3>
        <p><span className={classes.label}>Date:</span>10/10/2019</p>
        <p><span className={classes.label}>Amount:</span>5000</p>
      </div>
    </>
  )
}

export default withStyles(styles)(LoanDetails);