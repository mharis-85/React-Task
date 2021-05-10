import { ActionTypes } from "../actions/index";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SIGNIN: {
      return action.payload;
    }
    case ActionTypes.SIGNOUT: {
      return {};
    }
    default:
      return state;
  }
}
