import { Api } from "./config/request";

export const get{{name_pc}}List =() => {
  return Api.getListRequest("");
};
export const get{{name_pc}}ById =id => {
  return Api.getRequest(`${id}`);
};
export const create{{name_pc}} = payload => {
    return Api.postRequest("",payload);
};
  export const update{{name_pc}}ById = (id,payload)  => {
    return Api.putRequest(`${id}`,payload);
};
  export const delete{{name_pc}}ById = id => {
    return Api.deleteRequest(`${id}`);
};

export const {{name_pc}} = { 
    get{{name_pc}}List ,
    get{{name_pc}}ById,
    create{{name_pc}},
    update{{name_pc}}ById,
    delete{{name_pc}}ById
};
