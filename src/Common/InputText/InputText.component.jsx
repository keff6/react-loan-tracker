import React, { useState } from 'react';
import { withStyles, TextField } from '@material-ui/core';
import styles from './InputText.styles';

const InputText = ({classes, label, type}) => {
  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.inputCountainer}>
      {label && <span className={classes.label}>{label}</span>}
      <TextField
        id="name"
        type={type}
        variant="outlined"
        fullWidth
      />
    </div>
  )
}

export default withStyles(styles)(InputText);