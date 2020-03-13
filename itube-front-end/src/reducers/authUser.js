const initialState = {
    user: undefined
  };
  
  const authUser = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {user: action.payload.user};
      case 'LOGIN_FAILURE':
        return {user: action.payload.error};
      default:
        return state;
    }
  };
  
  export default authUser;