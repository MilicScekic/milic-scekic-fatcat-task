import axiosInstance from '@homework-task/api/axiosInstance';
import { Post } from '@homework-task/typescript/interfaces';
import { useMutation, UseMutationResult } from 'react-query';


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
