import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Button, withStyles } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import history from '../Config/history';
import styles from './LoanCard.styles';

const LoanCard = ({ classes, openReportPayments }) => (
  <Card>
    <CardHeader
      className={classes.cardHeader}
      title={<><LocalAtmIcon /><ArrowForwardIcon /><AccountBalanceIcon /><span>Kevin Fallas</span></> }
      subheader="Loaner"
    />
    <CardContent>
      <p className={classes.loanerName}>
        <span>Total:</span>$100 000
      </p>
      <p className={classes.loanerName}>
        <span>Completed:</span>$40 000 (40%)
      </p>
      <p className={classes.loanerName}>
        <span>Next Payment:</span>N / A
      </p>
    </CardContent>
    <CardActions className={classes.buttonsContainer}>
      <Button onClick={openReportPayments}>Report Payment</Button>
      <Button color="primary" onClick={() => history.push('/loans/154')}>View Details</Button>
    </CardActions>
  </Card>
)

export default withStyles(styles)(LoanCard);