import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import styles from './DatePicker.styles';

const DatePicker = ({classes, label}) => {
  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.inputCountainer}>
      {label && <span className={classes.label}>{label}</span>}
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          id="date-picker-dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          inputVariant="outlined"
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default withStyles(styles)(DatePicker);