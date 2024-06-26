import axiosInstance from '@homework-task/api/axiosInstance';
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
    const response = await axiosInstance.get('/users');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};

const useUsers = (): UseQueryResult<User[], Error> => {
  return useQuery<User[], Error>('users', fetchUsers);
};

export default useUsers;
