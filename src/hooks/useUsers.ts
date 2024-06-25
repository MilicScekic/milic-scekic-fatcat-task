import { useQuery, UseQueryResult } from 'react-query';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  } catch (error) {
    throw new Error('Error fetching data');
  }
};

const useUsers = (): UseQueryResult<User[], Error> => {
  return useQuery<User[], Error>('users', fetchUsers);
};

export default useUsers;
