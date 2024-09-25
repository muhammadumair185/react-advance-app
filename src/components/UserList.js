import React, { useContext } from 'react'
import { AppContext } from '../context'
import { User } from './User';

export const UserList = () => {
    const {users} = useContext(AppContext);
  return (
    <div>
        <h2>Available Users</h2>
        {users.map(user=><User key={user.id} user={user}/>)}
    </div>
  )
}
