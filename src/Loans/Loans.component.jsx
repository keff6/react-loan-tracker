import React, { useContext } from 'react';
import Header from '../Header/Header.component';
import LoanCard from './LoanCard.component';
import FormDialog from '../Common/FormDialog.component';
import {AppContext} from '../Config/Provider';

const Loans = ({ props }) => {
  const [state, setState] = useContext(AppContext);

  const openReportPayments = () => {
    setState(currentState => ({ ...currentState, isReportPaymentOpen: true}))
  }

  return (
    <>
      <Header title="My Loans"/>
      <LoanCard openReportPayments={openReportPayments}/>
      <FormDialog
        isOpen={state.isReportPaymentOpen}
        onClose={() => setState(currentState => ({ ...currentState, isReportPaymentOpen: false}))}
        formTitle="Report Payment"
      />
    </>
  )
}

export default Loans;