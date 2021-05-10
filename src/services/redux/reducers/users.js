import { ActionTypes } from "../actions/index";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SIGNUP: {
      const allJobs = state.slice();
      allJobs.push(action.payload);
      return allJobs;
    }
    default:
      return state;
  }
}
