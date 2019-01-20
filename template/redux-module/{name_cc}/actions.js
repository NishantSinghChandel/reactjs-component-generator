import { {{name_pc }} } from "../../services/{{name_cc}}";
import { mutation } from "./mutations";

const handleError = err => {
  console.log("Error in {{ name_cc }} action : ", err);
};

// Actions
export const get{{name_pc }}ListRequest = () => async dispatch => {
  try {
    dispatch(  );
    let result = await dispatch({{name_pc}}.get{{name_pc}}List());
    dispatch(mutation.set{{name_pc}}List(result));
  } catch (err) {
    handleError(err);
  }
};

export const create{{name_pc}}Request = (payload) => async dispatch => {
  try {
    let result = await dispatch(create{{name_pc}}(payload));
  } catch (err) {
    handleError(err);
  }
};

export const get{{name_pc}}ByIdRequest = (id) => async dispatch => {
  try {
    let result = await dispatch(get{{name_pc}}ById(id));
    dispatch(mutation.setActive{{name_pc}}(result));
  } catch (err) {
    handleError(err);
  }
};

export const update{{name_pc}}ByIdRequest = (id,payload) => async dispatch => {
  try {
    let result = await dispatch(update{{name_pc}}ById(id,payload));
    dispatch(mutation.setActive{{name_pc}}(result));
  } catch (err) {
    handleError(err);
  }
};

export const delete{{name_pc}}ByIdRequest = (id) => async dispatch => {
  try {
    let result = await dispatch(delete{{name_pc}}ById(id));
  } catch (err) {
    handleError(err);
  }
};
