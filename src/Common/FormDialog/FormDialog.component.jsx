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
  children
}) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
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
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
}

FormDialog.propTypes = {
  classes: proptypes.object.isRequired,
  contentText: proptypes.string,
  formTitle: proptypes.string,
  onClose: proptypes.func.isRequired,  
  onSubmit: proptypes.func,  
}

export default withStyles(styles)(FormDialog);