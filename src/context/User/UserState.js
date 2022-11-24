import React, { useReducer } from "react";
import UserReducer from './UserReducer';
import { UserContext } from './UserContext';
import axios from 'axios';


const UserState = (props) => {

  const initialState = {
    users: [],
    selectedUser: null
  }

  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Ésta función nos va a permitir obtener una lista de usuarios
  const getUsers = async () => {
    const res = await axios.get('https://reqres.in/api/users');
    console.log(res);
  }

  // Ésta función nos va a permitir obtener un usuario en espécifico
  const getProfile = async(id) => {
    const res = await axios('https://reqres.in/api/users/' + id);
    console.log(res);
  }


  return(

    <UserContext.Provider value={{
      users: state.users,
      selectedUser: state.selectedUser,
      getUsers: getUsers,
      getProfile: getProfile
    }}>
      {props.children}
    </UserContext.Provider>

  );

}

export default UserState;