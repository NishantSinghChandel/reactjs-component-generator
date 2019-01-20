import { initialState } from "./states";

export const {{name_cc}} = (state = initialState, action) => {
  switch (action.type) {
    case "SET_{{name_uc}}_LIST": {
      return Object.assign({}, state, {
        {{name_cc}}List: action.data
      });
    }
    case "SET_ACTIVE_{{name_uc}}": {
      return Object.assign({}, state, {
        active{{name_pc}}: action.data
      });
    }
    default:
      return state;
  }
};
