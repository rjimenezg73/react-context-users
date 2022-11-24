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
    <div className='list-group h-100'>
      {
        users.map(user => (
          <a className='list-group-item list-group-item-action' href='#!' key={user.id}>
            <p>
              {`${user.first_name} ${user.last_name}`}
            </p>
          </a>
        ))
      }
    </div>
  )
}

export default UserList;
