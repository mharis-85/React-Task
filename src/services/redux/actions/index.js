export const ActionTypes = {
  SIGNUP: "SIGNUP",
  SIGNIN: "SIGNIN",
  SIGNOUT: "SIGNOUT"
};

export const signup = payload => {
  return async dispatch => {
    dispatch({
      type: ActionTypes.SIGNUP,
      payload: payload
    });
  };
};

export const signin = payload => {
  return async dispatch => {
    dispatch({
      type: ActionTypes.SIGNIN,
      payload: payload
    });
  };
};

export const signout = payload => {
  return async dispatch => {
    dispatch({
      type: ActionTypes.SIGNOUT,
      payload: payload
    });
  };
};
