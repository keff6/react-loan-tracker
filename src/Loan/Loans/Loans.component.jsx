import React from 'react';
import { loans } from 'utils';
import Header from 'Header/Header.component';
import {LoanList} from 'Loan';

const Loans = ({ props }) => (
  <>
    <Header title="My Loans"/>
    <LoanList type="loanee" loansData={loans}/>
  </>
)

export default Loans;