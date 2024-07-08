import React, { createContext, useState, useContext, useEffect } from 'react';
import { UsersContext } from './UsersContext';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState('');
  const { users, setUsers } = useContext(UsersContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('authUser'));
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
    }
  }, []);

  const registerUser = (newUser) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUserId = users.length ? users[users.length - 1].id + 1 : 1;
    const userWithId = { ...newUser, id: newUserId };
    const updatedUsers = [...users, userWithId];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      login(user);
      setError('');
      return true;
    } else {
      setError('Correo o contraseña inválida');
      return false;
    }
  };

  const login = (user) => {
    setIsAuthenticated(true);
    setCurrentUser(user);
    localStorage.setItem('authUser', JSON.stringify(user));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem('authUser');
  };

  const updateUser = (updatedUser) => {
    setCurrentUser(updatedUser);
    localStorage.setItem('authUser', JSON.stringify(updatedUser));
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        login,
        logout,
        updateUser,
        registerUser,
        loginUser,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
