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
    case "SET_{{name_uc}}_LIST_DATA": {
      const data = [...state.{{name_cc}}List];
      data.unshift(action.data);
      return Object.assign({}, state, {
        {{name_cc}}List: data
      });
    }
    case "REMOVE_{{name_uc}}_FROM_LIST": {
      const data = state.{{name_cc}}List.filter(data => data.id !== action.data);
      return Object.assign({}, state, {
        {{name_cc}}List: data
      });
    }
    case "SET_UPDATE_{{name_uc}}_LIST_DATA": {
      const data = state.{{name_cc}}List.map(data => {
        if (data.id === action.data.id) {
          return (data = action.data);
        } else {
          return data;
        }
      });
      return Object.assign({}, state, {
        {{name_cc}}List: data
      });
    }
    case "IS_FETCHING_DATA": {
      return Object.assign({}, state, {
        isFetching: action.data
      });
    }
    default:
      return state;
  }
};
