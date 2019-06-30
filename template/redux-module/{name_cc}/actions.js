import { {{name_pc }} } from "../../services/{{name_cc}}";
import { mutation } from "./mutations";

const handleError = err => {
  console.log("Error in {{ name_cc }} action : ", err);
};

// Actions
export const get{{name_pc }}ListRequest = () => async dispatch => {
  try {
    dispatch(mutation.isFetchingData(true))
    let result = await {{name_pc}}.get{{name_pc}}List();
    dispatch(mutation.set{{name_pc}}List(result));
    if (result) {
      dispatch(mutation.set{{name_pc}}List(result ? result : []));
      dispatch(mutation.isFetchingData(false))
      return result;
    }
  } catch (err) {
    handleError(err);
  }
};

export const create{{name_pc}}Request = (payload) => async dispatch => {
  try {
    let result = await {{name_pc}}.create{{name_pc}}(payload);
    if (result) {
      dispatch(mutation.set{{name_pc}}ListData(result));
      return result;
    }
  } catch (err) {
    handleError(err);
  }
};

export const get{{name_pc}}ByIdRequest = (id) => async dispatch => {
  try {
    let result = await {{name_pc}}.get{{name_pc}}ById(id);
    dispatch(mutation.setActive{{name_pc}}(result));
  } catch (err) {
    handleError(err);
  }
};

export const update{{name_pc}}ByIdRequest = (id,payload) => async dispatch => {
  try {
    let result = await {{name_pc}}.update{{name_pc}}ById(id,payload);
    if (result) {
      dispatch(mutation.setUpdate{{name_pc}}ListData(result));
      return result;
    }
  } catch (err) {
    handleError(err);
  }
};

export const delete{{name_pc}}ByIdRequest = (id) => async dispatch => {
  try {
    dispatch(mutation.remove{{name_pc}}FromList(id));
    let result = await {{name_pc}}.delete{{name_pc}}ById(id);
  } catch (err) {
    handleError(err);
  }
};

export const setActive{{name_pc}}Request = data => async dispatch => {
  try {
    dispatch(mutation.setActive{{name_pc}}(data));
  } catch (err) {
    handleError(err);
  }
};





