import React, { useEffect } from 'react';
import { useContext } from 'react';
import UserContext from '../context/User/UserContext';

const UserList = () => {

  const { getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();  
    getProfile(4);
  },[]);

  return (
    <div>
      User List Component
    </div>
  )
}

export default UserList;
