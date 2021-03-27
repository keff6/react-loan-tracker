import React from 'react';
import Header from '../Header/Header.component';
import LoanCard from './LoanCard.component';

const Loans = ({ props }) => (
  <>
    <Header title="My Loans"/>
    <LoanCard />
  </>
)

export default Loans;