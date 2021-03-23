import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Button, withStyles } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import history from '../Config/history';
import styles from './LoanCard.styles';

const LoanCard = ({ classes, openReportPayments }) => (
  <Card>
    <CardHeader
      className={classes.cardHeader}
      title="$100 000"
    />
    <CardContent>
      <p className={classes.loanerName}>
        <AccountBalanceIcon /><span>Kevin Fallas</span>
      </p>
    </CardContent>
    <CardActions>
      <Button onClick={openReportPayments}>Report Payment</Button>
      <Button color="primary" onClick={() => history.push('/loans/154')}>View Details</Button>
    </CardActions>
  </Card>
)

export default withStyles(styles)(LoanCard);