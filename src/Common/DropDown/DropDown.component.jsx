import React from 'react';
import { withStyles, Select, MenuItem, FormControl   } from '@material-ui/core';
import styles from './DropDown.styles';

const DropDown = ({classes, label, value, options, onChange}) => {
  return (
    <div className={classes.inputCountainer}>
      {label && <span className={classes.label}>{label}</span>}
      <FormControl  variant="outlined" fullWidth>
        <Select
          classes={{ root: classes.root}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={onChange}
          fullWidth
        >
          <MenuItem value="">Select Option</MenuItem> 
          {options.length > 0 && options.map(o => <MenuItem value={o.value}>{o.text}</MenuItem>) }
        </Select>
      </FormControl>
    </div>
  )
}

export default withStyles(styles)(DropDown);