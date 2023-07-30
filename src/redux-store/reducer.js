const initialState = {
  user: {},
  users: [],
  posts: [],
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.user,
      };

    case 'USERS':
      return {
        ...state,
        users: action.users,
      };

    case 'POSTS':
      return {
        ...state,
        posts: action.posts,
      };

    default:
      return state;
  }
};

export default reducer;
