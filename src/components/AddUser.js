import '../App.css'
import React, { useContext, useState } from 'react'
import { AppContext } from '../context'
import {Card,Input,Button} from 'antd';
const { TextArea } = Input;
export const AddUser = () => {
    const {dispatchUserEvent} = useContext(AppContext);
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [bio,setBio] = useState('');
    const handleAddUser = ()=>{
        const user = {id:Math.random(),name,age,bio};
        dispatchUserEvent('ADD_USER',{newUser:user});
    }
  return (
    <div className='User'>
        <h2>Add New User</h2>
        <Card className=''>
            <Input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Name'/>
            <br/>
            <br/>
            <Input type='text' value={age} onChange={e=>setAge(e.target.value)} placeholder='Age'/>
            <br/>
            <br/>
            <TextArea row={4} maxLength={100} type='text' value={bio} onChange={e=>setBio(e.target.value)} placeholder='Bio'/>
            <br/>
            <br/>
            <Button type='primary' onClick={handleAddUser} primary>Add User</Button>
        </Card>
    </div>
  )
}
