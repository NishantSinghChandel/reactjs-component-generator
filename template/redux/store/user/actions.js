import { User } from "../../services/user";
import { mutation } from "./mutations";

const handleError = err => {
  console.log("Error in Login action : ", err);
};

// Actions
export const userLoginRequest = payload => async dispatch => {
  try {
    let result = await dispatch(User.userLogin(payload));
    dispatch(mutation.setUserLoginDetail(result));
  } catch (err) {
    handleError(err);
  }
};
