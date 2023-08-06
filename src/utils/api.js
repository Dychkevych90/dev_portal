import axios from 'axios';

import handleApiError from './errorHandler';

const BASE_URL = process.env.REACT_APP_BFF_URL_LOCAL;

export const getPosts = async () => {
  try {
    const response = await axios.get( `${BASE_URL}/post/` );
    return response.data;
  } catch ( error ) {
    throw new Error( handleApiError( error ) );
  }
};

export const createPost = async ( postData ) => {
  try {
    const response = await axios.post( `${BASE_URL}/post/created`, postData );
    return response.data;
  } catch ( error ) {
    throw new Error( handleApiError( error ) );
  }
};

export const updatePost = async ( postId, postData ) => {
  try {
    const response = await axios.put( `${BASE_URL}/post/${postId}/updatedPost`, postData );
    return response.data;
  } catch ( error ) {
    throw new Error( handleApiError( error ) );
  }
};

export const deletePost = async ( postId ) => {
  console.log( 'postOD', typeof postId );
  try {
    const response = await axios.delete( `${BASE_URL}/post/${postId}` );
    return response.data;
  } catch ( error ) {
    throw new Error( handleApiError( error ) );
  }
};

export const registerUser = async ( userData ) => {
  try {
    const response = await axios.post( `${BASE_URL}/auth/registration`, userData );
    return response.data;
  } catch ( error ) {
    throw new Error( handleApiError( error ) );
  }
};

export const loginUser = async ( userData ) => {
  try {
    const response = await axios.post( `${BASE_URL}/auth/login`, userData );
    return response.data;
  } catch ( error ) {
    throw new Error( handleApiError( error ) );
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get( `${BASE_URL}/users/` );
    return response.data;
  } catch ( error ) {
    throw new Error( handleApiError( error ) );
  }
};
