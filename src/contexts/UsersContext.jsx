import React, { createContext, useState, useEffect } from 'react';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
    } else {
      const fetchUsers = async () => {
        try {
          const response = await fetch('/data/usuarios.json');
          const data = await response.json();
          setUsers(data.usuarios);
          localStorage.setItem('users', JSON.stringify(data.usuarios));
        } catch (error) {
          setError('Error fetching users');
        }
      };

      fetchUsers();
    }
  }, []);

  const addUser = (newUser) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  return (
    <UsersContext.Provider value={{ users, addUser, error, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
