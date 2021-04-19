import React from 'react';
import proptypes from 'prop-types';
import { withStyles, Select, MenuItem, FormControl   } from '@material-ui/core';
import styles from './DropDown.styles';

const DropDown = ({
  classes,
  id,
  label,
  value,
  options,
  onChange,
}) => {
  return (
    <div className={classes.inputCountainer}>
      {label && <span className={classes.label}>{label}</span>}
      <FormControl  variant="outlined" fullWidth>
        <Select
          id={id}
          classes={{ root: classes.root}}
          labelId={`label=${id}`}
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

DropDown.propTypes = {
  classes: proptypes.object.isRequired,
  id: proptypes.string,
  label: proptypes.string,
  onChange: proptypes.func,
  options: proptypes.array,
  value: proptypes.string,
}

export default withStyles(styles)(DropDown);