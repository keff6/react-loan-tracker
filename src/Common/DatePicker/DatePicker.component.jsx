import React, { useState } from 'react';
import proptypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import styles from './DatePicker.styles';

const DatePicker = ({
  classes,
  label,
  id
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.inputCountainer}>
      {label && <span className={classes.label}>{label}</span>}
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          fullWidth
          inputVariant="outlined"
          format="MM/dd/yyyy"
          KeyboardButtonProps={{ 'aria-label': 'change date' }}
          id={id}
          value={selectedDate}
          onChange={handleDateChange}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

DatePicker.propTypes = {
  classes: proptypes.object.isRequired,
  id: proptypes.string,
  label: proptypes.string, 
}

export default withStyles(styles)(DatePicker);