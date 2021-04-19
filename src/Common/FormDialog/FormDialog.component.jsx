import React from 'react';
import proptypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withStyles
}
from '@material-ui/core';
import styles from './FormDialog.styles';

const FormDialog = ({
  isOpen,
  onClose,
  formTitle,
  onSubmit,
  classes,
  contentText,
  children,
  maxWidth = 'sm',
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      maxWidth={maxWidth}
      fullWidth
    >
      <DialogTitle id="form-dialog-title">{formTitle || 'Form'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {contentText}
        </DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

FormDialog.propTypes = {
  children: proptypes.node,
  classes: proptypes.object.isRequired,
  contentText: proptypes.string,
  formTitle: proptypes.string,
  isOpen: proptypes.bool,
  maxWidth: proptypes.string,
  onClose: proptypes.func.isRequired,  
  onSubmit: proptypes.func,
}

export default withStyles(styles)(FormDialog);