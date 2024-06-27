import axiosInstance from '@homework-task/api/axiosInstance';
import { User } from '@homework-task/typescript/interfaces';
import { useQuery, UseQueryResult } from 'react-query';


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
