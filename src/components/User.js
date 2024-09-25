import React, { useContext } from 'react'
import { AppContext } from '../context'
import {Card,Button} from 'antd';

export const User = ({user}) => {
    const {dispatchUserEvent} = useContext(AppContext);
    const handleRemoveUser = ()=>{
        dispatchUserEvent('REMOVE_USER',{userId:user.id});
    }

  return (
    <div className='User'>
        <Card>
            <h3>{user.name}</h3>
            <h4>{user.age}</h4>
            <p>
                {user.bio}
            </p>
            <Button type='primary' onClick={handleRemoveUser} danger>Delete User</Button>
        </Card>
    </div>
  )
}
