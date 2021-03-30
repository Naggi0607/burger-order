const initialState = {
  token: "",
  userId: "",
  error: "",
  loading: false,
  loginIn: false,
};

const signupLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_START":
      return {
        ...state,
        loading: true,
      };
    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        token: action.token,
        userId: action.userId,
      };
    case "SIGNUP_USER_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "SIGNIN_USER_START":
      return {
        ...state,
        loginIn: true,
      };
    case "SIGNIN_USER_SUCCESS":
      return {
        ...state,
        loginIn: false,
        error: null,
        token: action.token,
        userId: action.userId,
      };
    case "SIGNIN_USER_ERROR":
      return {
        ...state,
        loginIn: false,
        error: action.error,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
        userId: null,
        error: null,
      };
    default:
      return state;
  }
};

export default signupLoginReducer;
