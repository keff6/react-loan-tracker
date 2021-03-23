export const loans = [
  {
    id: '123',
    loaner: 'Kevin Fallas', // should be related to user table in the future
    debtor: 'Jose Chinchilla', // should be related to user table in the future
    contractDate: '01/01/2021',
    currency: 'colones',
    totalLoan: 100000,
    totalPaid: 40000,
    periodicity: null,
    payments: [
      {
        date: '02/02/2021',
        amount: 5000,
      },
      {
        date: '02/02/2021',
        amount: 5000,
      }
    ]
  }
]