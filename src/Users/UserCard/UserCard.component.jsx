import React from 'react';
import { Card, CardContent, CardActions, Button, withStyles } from '@material-ui/core';
// import history from '../Config/history';
import styles from './UserCard.styles';

const UserCard = ({ classes, user }) => {
  
  return (
    <Card className={classes.userCard}>
      <CardContent>
        <p className={classes.loanerName}>
          {user.name} {user.lastName}
        </p>
      </CardContent>
      <CardActions className={classes.buttonsContainer}>
        <Button color="primary" onClick={() => console.log('/loans/154')}>View Details</Button>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(UserCard);