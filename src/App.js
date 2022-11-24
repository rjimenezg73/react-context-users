import './App.css';

// Importando Componentes del proyecto
import UserList from './components/UserList';
import Profile from './components/Profile';

// Importando context
import UserState from './context/User/UserState';

function App() {
  return (
    <UserState>
      <UserList />
      <Profile />
    </UserState>
  );
}

export default App;
