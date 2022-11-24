import React, { useEffect } from 'react';
import { useContext } from 'react';
import UserContext from '../context/User/UserContext';

const UserList = () => {

  const { getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  },[]);

  return (
    <div>
      User List Component
    </div>
  )
}

export default UserList;
