import './App.css';

// Importando Componentes del proyecto
import UserList from './components/UserList';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile />
      <UserList />
    </div>
  );
}

export default App;
