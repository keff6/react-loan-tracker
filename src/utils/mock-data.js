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
    interestRate: 0,
    status: 'ongoing',  // pending / archived
    payments: [
      {
        date: '02/02/2021',
        amount: 5000,
        status: 'approved'
      },
      {
        date: '02/02/2021',
        amount: 5000,
        status: 'inTransit'
      }
    ]
  }
]

export const users = [
  {
    id: '1',
    name: 'Kevin',
    lastName: 'Fallas',
    email: 'kev.fallas@gmail.com',
    userType: 'admin',
  },
  {
    id: '2',
    name: 'Jose',
    lastName: 'Chinchilla',
    email: 'beto@gmail.com',
    userType: 'loanee',
  }
]