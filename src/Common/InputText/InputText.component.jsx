import React from 'react';
import proptypes from 'prop-types';
import { withStyles, TextField } from '@material-ui/core';
import styles from './InputText.styles';

const InputText = ({
  classes, 
  label, 
  type,
  id,
  value,
  onChange,
}) => {

  return (
    <div className={classes.inputCountainer}>
      {label && <span className={classes.label}>{label}</span>}
      <TextField
        id={id}
        type={type}
        variant="outlined"
        fullWidth
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

InputText.propTypes = {
  classes: proptypes.object.isRequired,
  id: proptypes.string,
  label: proptypes.string,
  onChange: proptypes.func,
  type: proptypes.string,
  value: proptypes.string,
}

export default withStyles(styles)(InputText);