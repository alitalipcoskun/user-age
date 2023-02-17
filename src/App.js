import React, { useState } from 'react';
import './App.css';
import UserList from './Components/User/UserList';
import UserForm from './Components/UserForm/UserForm';



const DUMMY_USERS = [
  {name: 'Ali', age: 31, id: "e1"},
  {name: 'Talip', age: 23, id: "e2"},
]


function App() {
  const [user, setUser] = useState(DUMMY_USERS);

  function addingUserHandler(newUser){
    const addNewUser = {
      ...newUser,
      id: Math.random().toString(),
    }
    setUser((prevValue) => {
      return [
        addNewUser,
        ...prevValue,
      ]
    })
  }

  function deleteHandler(userId){
    const newUserList = user.filter((user) => { return user.id !== userId});
    setUser(newUserList);
    console.log(newUserList);
  }

  return (
    <div className="App">
      <UserForm onAddingUser = {addingUserHandler}></UserForm>
      <UserList userList = {user} onDeletingUser = {deleteHandler}></UserList>
    </div>
  );
}

export default App;
