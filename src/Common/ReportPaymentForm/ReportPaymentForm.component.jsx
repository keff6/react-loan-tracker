import React, { useContext } from 'react';
import proptypes from 'prop-types';
import { withStyles, Button } from '@material-ui/core';
import { AppContext } from 'Config/Provider';
import { FormDialog, DatePicker, InputText } from 'Common';
import styles from './ReportPaymentForm.styles';

const ReportPaymentForm = ({classes}) => {
  const [state, setState] = useContext(AppContext);

  const openReportPayments = () => {
    setState(currentState => ({ ...currentState, isReportPaymentOpen: true}))
  }

  return (
    <>
      <Button onClick={openReportPayments}>Report Payment</Button>

      <FormDialog
        isOpen={state.isReportPaymentOpen}
        onClose={() => setState(currentState => ({ ...currentState, isReportPaymentOpen: false}))}
        formTitle="Report Payment"
        maxWidth="xs"
      >
        <form>
          <DatePicker
            label="Date of Payment"
          />
          <InputText label="Amount" type="text"/>
        </form>
      </FormDialog>
    </>
  )
}

ReportPaymentForm.propTypes = {
  classes: proptypes.object.isRequired,
}

export default withStyles(styles)(ReportPaymentForm);