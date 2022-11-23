import React, { useReducer } from "react";
import UserReducer from './UserReducer';
import { UserContext } from './UserContext';


const UserState = () => {

  const initialState = {
    users: [],
    selectedUser: null
  }

  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Ésta función nos va a permitir obtener una lista de usuarios
  const getUsers = () => {

  }

  // Ésta función nos va a permitir obtener un usuario en espécifico
  const getProfile = () => {

  }


  return(

    <UserContext>
      
    </UserContext>

  );

}

export default UserState;