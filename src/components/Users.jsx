import React, { useEffect, useState } from 'react';
import { createUser, deleteUser, fetchUsers } from '../utils/api';
import { Form } from './Form';

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  const handleToEdit = (user) => {
    setUserToEdit(user);
  };

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleDelUser = (user) => {
    deleteUser(user)
    .then(fetchUsers)
    .then(setUsers);
  };

  const handleAddUser = () => {
    let newUser = {};
    let idArr = [];

    for (let key in users[0]) {
      newUser[key] = '';
    };

    for (let i = 0; i < users.length; i++) {
      idArr.push(users[i].id);
    }
    newUser.id = Math.max(...idArr) + 1;

    setUserToEdit(newUser);
    createUser(newUser)
    .then(fetchUsers)
    .then(setUsers);
  };
  
  return (
    <>
      {users.map((user) => (
        <li key={user.id} className='user'>
          <div className='user_info'>
            <p id="outputName">{ user.firstName }</p>
            <p>{ user.lastName }</p>
            <p id="outputEmail">{ user.email }</p>
            <p id="outputAge">{ user.age }</p>
            <p id="outputGender">{ user.gender }</p>
            <p id="outputBlood">{ user.bloodGroup }</p>
          </div>

          <button onClick={() => handleToEdit(user)} className='btn_edit'>Edit</button>
          <button onClick={() => handleDelUser(user)} className='btn_del'>Del</button>
        </li>
      ))}

      <button onClick={() => handleAddUser()} className='btn_add'>Add</button>

      <div className={`modal ${userToEdit ? 'show_back' : ''}`}>
        <div className={`modal_body ${userToEdit ? 'show_modal' : ''}`}>
          <h2>User editor</h2>
          <hr />
          
          {userToEdit && (
            <Form
              users={users}
              setUsers={setUsers}
              userToEdit={userToEdit}
              setUserToEdit={setUserToEdit}
            />
          )}
        </div>
      </div>
    </>
  );
};
