import axiosInstance from '@homework-task/api/axiosInstance';
import { useMutation, UseMutationResult } from 'react-query';

export interface Post {
  id: number;
  title: string;
  body: string
}

const addPost = async (data:  Omit<Post, 'id'>): Promise<Post> => {
  try {
    const response = await axiosInstance.post<Post>(
      '/posts',
      data
    );
    return response.data;
  } catch (error) {
    throw new Error('Error adding post');
  }
};

const usePost = (): UseMutationResult<Post, Error, Omit<Post, 'id'>> => {
  return useMutation<Post, Error, Omit<Post, 'id'>>(addPost);
};

export default usePost;
