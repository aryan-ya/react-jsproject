import React, { useState } from 'react';
import './App.css';
import UserCard from './UserCard';


function App() {
  const [users, setUsers] = useState(['User 1', 'User 2', 'User 3', 'User 4']);

  const handleDelete = (index) => {
    const confirmDelete = window.confirm('delete  ' + users[index] + ' this');
    if (confirmDelete) {
      const newUsers = [...users];
      newUsers.splice(index, 1);
      setUsers(newUsers);
    }
  };

  return (
    <div className="App">
      <h1>Users</h1>
      {users.map((user, index) => (
        <UserCard key={index} name={user} onDelete={() => handleDelete(index)} />
      ))}
    </div>
  );
}

export default App;
