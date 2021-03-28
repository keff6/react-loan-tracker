import React, { useContext } from 'react';
import { withStyles, Button } from '@material-ui/core';
import {AppContext} from '../../Config/Provider';
import FormDialog from '../FormDialog/FormDialog.component';
import DatePicker from '../DatePicker/DatePicker.component';
import InputText from '../InputText/InputText.component';
import styles from './ReportPaymentForm.styles';

const ReportPaymentForm = () => {
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

export default withStyles(styles)(ReportPaymentForm);