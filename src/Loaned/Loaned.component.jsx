import React, { useState } from 'react';
import { loans } from 'utils';
import { Button } from '@material-ui/core';
import FormDialog from '../Common/FormDialog/FormDialog.component';
import InputText from '../Common/InputText/InputText.component';
import DropDown from '../Common/DropDown/DropDown.component';
import Header from '../Header/Header.component';
import LoanList from '../LoanList/LoanList.component';

const Loaned = ({ props }) => {
  const [isLoanFormOpen, setLoanFormOpen] = useState(false);

  return (
    <>
      <Header title="My Money Loaned"/>
      <Button color="primary" onClick={() => setLoanFormOpen(true)}>Add Loan</Button>
      <LoanList type="loaner" loansData={loans}/>
      <FormDialog
        isOpen={isLoanFormOpen}
        onClose={() => setLoanFormOpen(false)}
        formTitle="Add Loan"
      >
        <form>
          <InputText label="Loaner" type="text"/>
          <InputText label="Debtor" type="text"/>
          <InputText label="Contract Date" type="date"/>
          <DropDown
            label="Currency"
            value=""
            options={[
              {text:'Colon', value: 'colon'},
              {text:'Dolar', value: 'dolar'},
            ]}
            onChange={(val) => console.warn(val)}
          />
          <InputText label="Loan Amount" type="number"/>
          <InputText label="Interest Rate" type="number"/>
          <DropDown
            label="Periodicity"
            value=""
            options={[
              {text:'Bi-Weekly', value: 'biweekly'},
              {text:'Monthly', value: 'monthly'},
              {text:'Undefined', value: 'undefined'},
            ]}
            onChange={(val) => console.warn(val)}
          />
          <DropDown
            label="Status"
            value=""
            options={[
              {text:'Pending', value: 'pending'},
              {text:'Ongoing', value: 'ongoing'},
              {text:'Archived', value: 'archived'},
            ]}
            onChange={(val) => console.warn(val)}
          />
        </form>
      </FormDialog>
    </>
  )
}

export default Loaned;