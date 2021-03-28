import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Button, withStyles } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import history from '../Config/history';
import ReportPaymentForm from '../Common/ReportPaymentForm/ReportPaymentForm.component';
import styles from './LoanCard.styles';

const LoanCard = ({ classes, type, loan }) => {
  const isLoaner = type==='loaner';
  const headerIcon = isLoaner ? <><AccountBalanceIcon /><ArrowForwardIcon /><LocalAtmIcon /></> :
                        <><LocalAtmIcon /><ArrowForwardIcon /><AccountBalanceIcon /></>;

  return (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        title={<>{headerIcon}<span>{isLoaner ? loan.debtor : loan.loaner}</span></> }
        subheader={isLoaner ? 'Debtor' : 'Loaner'}
      />
      <CardContent>
        <p className={classes.loanerName}>
          <span>Total:</span>{loan.totalLoan}
        </p>
        <p className={classes.loanerName}>
          <span>Completed:</span>{loan.totalPaid} (0%)
        </p>
        <p className={classes.loanerName}>
          <span>Next Payment:</span>N / A
        </p>
      </CardContent>
      <CardActions className={classes.buttonsContainer}>
        <ReportPaymentForm />
        <Button color="primary" onClick={() => history.push('/loans/154')}>View Details</Button>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(LoanCard);