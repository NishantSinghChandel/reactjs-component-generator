import { Api } from "./config/request";
export const userLogin = payload => {
  return Api.getRequest("", payload);
};

export const User = {
  userLogin
};
