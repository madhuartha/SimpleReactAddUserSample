import React,{ useState } from 'react';
import AddNewUser from './components/Users/AddNewUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [userList,setUserList] = useState([]);

  const addUserHandler = (name,age) => {
    setUserList(prevUserList => [...prevUserList,{name,age,id:Math.random().toString()}])
  }

  return (
    <div>
      <AddNewUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
