import React, { useState } from 'react';
import { withStyles, Button } from '@material-ui/core';
import { users } from 'utils/mock-data';
import Header from '../Header/Header.component';
import UserCard from './UserCard/UserCard.component';
import FormDialog from '../Common/FormDialog/FormDialog.component';
import InputText from '../Common/InputText/InputText.component';
import DropDown from '../Common/DropDown/DropDown.component';
import styles from './Users.styles'

const Users = ({classes}) => {
  const [isUserFormOpen, setUserFormOpen] = useState(false);

  return (
    <>
      <Header title="Users" />
      <Button color="primary" onClick={() => setUserFormOpen(true)}>Add User</Button>
      <div className={classes.usersCountainer}>
        {users.map(user => <UserCard user={user}/>)}
      </div>
      <FormDialog
        isOpen={isUserFormOpen}
        onClose={() => setUserFormOpen(false)}
        formTitle="Add User"
      >
        <form>
          <InputText label="Name" type="text"/>
          <InputText label="Last Name" type="text"/>
          <InputText label="EMail" type="email"/>
          <DropDown
            label="User Type"
            value="admin"
            options={[
              {text:'Admin', value: 'admin'},
              {text:'Loaner', value: 'loaner'},
              {text:'Loanee', value: 'Loanee'},
            ]}
            onChange={(val) => console.warn(val)}
          />
        </form>
      </FormDialog>
    </>
  )
}

export default withStyles(styles)(Users);