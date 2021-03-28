import React from 'react';
import { loans } from 'utils';
import Header from '../Header/Header.component';
import LoanList from '../LoanList/LoanList.component';

const Loaned = ({ props }) => (
  <>
    <Header title="My Money Loaned"/>
    <LoanList type="loaner" loansData={loans}/>
  </>
)

export default Loaned;