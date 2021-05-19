// import {register,
//   login,
//   logout,} from "../../../Api/coreApiCalls"
import Axios from "axios";
import Cookie from "js-cookie";
export const ActionTypes = {
  SIGNUP: "SIGNUP",
  SIGNIN: "SIGNIN",
  SIGNOUT: "SIGNOUT",

USER_REGISTER_REQUEST : "USER_REGISTER_REQUEST",
USER_REGISTER_SUCCESS : "USER_REGISTER_SUCCESS",
USER_REGISTER_FAIL : "USER_REGISTER_FAIL",

USER_LOGIN_REQUEST : "USER_LOGIN_REQUEST",
USER_LOGIN_SUCCESS : "USER_LOGIN_SUCCESS",
USER_LOGIN_FAIL : "USER_LOGIN_FAIL",
};



/*======Below is the implementation Logic for Api calls from server using middlewares==== */
/*======As serever wasn't responding, so these functions are for implementation logic as discussed==== */ 

const device = "device";
const location = "location";

export const register = (email, password, confirmPassword, IP) => async (dispatch) => {
  dispatch({
    type: ActionTypes.USER_REGISTER_REQUEST,
    payload: { email, password, confirmPassword, IP },
  });
  try {
    let data = await Axios.post(
      "https://staging-spot.dafriexchange.com/api/user",
      {
        email,
        password,
        confirmPassword,
        IP,
        device,
        location,
      },
      { headers: { "content-type": "application/json" } }
    );
    console.log(data);
    dispatch({ type: ActionTypes.USER_REGISTER_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: ActionTypes.USER_REGISTER_FAIL, payload: error.message });
  }
};

export const login = (email, password, IP) => async (dispatch) => {
  dispatch({ type: ActionTypes.USER_LOGIN_REQUEST, payload: { email, password, IP } });
  try {
    let data = await Axios.post(
      "https://staging-spot.dafriexchange.com/api/users/accessToken",
      {
        email,
        password,
        IP,
        device,
        location,
      },
      { headers: { "content-type": "application/json" } }
    );
    dispatch({ type: ActionTypes.USER_LOGIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: ActionTypes.USER_LOGIN_FAIL, payload: error.message });
  }
};


                                    /*============================ */

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
