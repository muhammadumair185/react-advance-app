import './App.css';
import { AppContext } from './context';
import { AddUser } from './components/AddUser';
import { useState } from 'react';
import { UserList } from './components/UserList';
import {DatePicker, Form} from 'antd';
import moment from 'moment';
import dayjs from 'dayjs';
import UploadFile from './components/UploadFile';
import FileUpload from './components/UploadFile';
import { ShapeEditor } from './ReactDev/Array';
import { CounterList } from './ReactDev/CounterList';
import {Bucketlist, List, ReverseList} from './ReactDev/List'
import Accordion from './manage_states/Accordion';
import Messenger from './manage_states/Messenger';
import MuiAutoComplete from './MuiComponents/MuiAutoComplete';
function App() {
  const [users,setUsers] = useState([]);
  const dispatchUserEvent = (actionType,payload)=>{
    switch(actionType){
      case 'ADD_USER':
        setUsers([...users,payload.newUser]);
        break;
      case 'REMOVE_USER':
        setUsers(users.filter(user => user.id !== payload.userId));
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      {/* <AppContext.Provider value={{users,dispatchUserEvent}}>
        <AddUser/>
        <UserList/>
      </AppContext.Provider> */}
      {/* <Form initialValues={{start: dayjs().startOf('month'), end:moment().endOf('month')}}>
        <Form.Item name='start' label='Start Date'>
          <DatePicker format={"YYYY-MM-DD"} placeholder='Start Date'/>
        </Form.Item>
        <Form.Item name='end' label='End Date'>
          <DatePicker format={"YYYY-MM-DD"} placeholder='End Date'/>
        </Form.Item>
      </Form> */}
      {/* <UploadFile/> */}
      {/* <div style={{ padding: 20 }}>
        <h1>File Upload Example</h1>
        <FileUpload />
      </div> */}
      {/* <ShapeEditor/> */}
      {/* <CounterList/> */}
      {/* <List/> */}
      <ReverseList/>
      <Bucketlist/>
      <Accordion/>
      <Messenger/>
      {/* <MuiAutoComplete/> */}
    </div>
  );
}

export default App;
