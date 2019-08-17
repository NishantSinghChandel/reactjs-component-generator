import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { user } from "./user/reducers";

export const appReducer = combineReducers({
  user
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    // resets redux store state
    state = undefined
  }
  return appReducer(state, action)
}

const devTool =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : compose;

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    devTool
  )
);

export default store;
