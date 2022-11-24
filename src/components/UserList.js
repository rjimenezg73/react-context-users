import React, { useEffect } from 'react';
import { useContext } from 'react';
import UserContext from '../context/User/UserContext';

const UserList = () => {

  const { getUsers, users } = useContext(UserContext);

  useEffect(() => {
    getUsers();  
    console.log(users)
  },[]);

  return (
    <div>
      User List Component
    </div>
  )
}

export default UserList;
