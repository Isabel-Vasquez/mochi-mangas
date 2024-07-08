import { useContext } from 'react';
import { UsersContext } from '../contexts/UsersContext';

const useUsers = () => {
  return useContext(UsersContext);
};

export default useUsers;
