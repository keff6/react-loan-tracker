import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Button, withStyles } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import styles from './LoanCard.styles';

const LoanCard = ({ classes }) => (
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
      <Button>Report Payment</Button>
      <Button color="primary">View Details</Button>
    </CardActions>
  </Card>
)

export default withStyles(styles)(LoanCard);