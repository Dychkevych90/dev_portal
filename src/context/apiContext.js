import React, { createContext, useContext } from 'react';

import {
  getPosts,
  updatePost,
  deletePost,
  createPost,
  registerUser,
  loginUser,
} from '../utils/api';

const ApiContext = createContext();

const ApiProvider = ( { children } ) => {
  const api = {
    getPosts: async () => await getPosts(),
    updatePost: async ( postId, postData ) => await updatePost( postId, postData ),
    createPost: async ( postData ) => await createPost( postData ),
    deletePost: async ( postId ) => await deletePost( postId ),
    registerUser: async ( userData ) => await registerUser( userData ),
    loginUser: async ( userData ) => await loginUser( userData ),
  };

  return <ApiContext.Provider value={ api }>{children}</ApiContext.Provider>;
};

const useApi = () => {
  return useContext( ApiContext );
};

export { ApiProvider, useApi };
