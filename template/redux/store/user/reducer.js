import { initialState } from "./states";

export const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DETAIL": {
      return Object.assign({}, state, {
        userDetail: action.data
      });
    }
    default:
      return state;
  }
};
