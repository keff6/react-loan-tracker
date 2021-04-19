import React from 'react';
import proptypes from 'prop-types';
import { withStyles, Button, Divider } from '@material-ui/core';
import Header from '../../Header/Header.component'
import { loans } from 'utils';
import history from 'Config/history';
import { ReportPaymentForm } from 'Common';
import styles from './LoanDetails.styles';

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

LoanDetails.propTypes = {
  classes: proptypes.object.isRequired,
}

export default withStyles(styles)(LoanDetails);