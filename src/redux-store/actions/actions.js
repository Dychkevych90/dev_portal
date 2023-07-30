const setUser = ( user ) => {
  return ( dispatch ) => {
    dispatch( {
      type: 'LOGIN_USER',
      user: user,
    } );
  };
};

const setAllPosts = ( posts ) => {
  return ( dispatch ) => {
    dispatch( {
      type: 'POSTS',
      user: posts,
    } );
  };
};

export {
  setAllPosts,
  setUser,
};
