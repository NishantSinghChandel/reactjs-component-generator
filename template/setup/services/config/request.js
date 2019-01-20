import axios from "axios";
// import store from "@/store";
import { API_URL } from "./apiUrl";

const _authorizationHeaders = () => ({
  // Authorization: store.state.login.authToken ? store.state.login.authToken : "",
  "Content-Type": "application/json"
});

const handleError = err => {
  console.log(`Api call error in services -> request.js : `, err);
};

export const getRequest = async (url, headers = _authorizationHeaders()) => {
  try {
    const res = await axios.get(API_URL + url, {
      headers: Object.assign({}, headers)
    });
    return res.data.result ? res.data.result : res.data;
  } catch (err) {
    handleError(err);
  }
};

export const getListRequest = async (
  url,
  headers = _authorizationHeaders()
) => {
  try {
    const res = await axios.get(API_URL + url, {
      headers: Object.assign({}, headers)
    });
    return res.data.result ? res.data.result : res.data;
  } catch (err) {
    handleError(err);
  }
};

export const postRequest = async (
  url,
  data = {},
  headers = _authorizationHeaders()
) => {
  try {
    const res = await axios({
      url: API_URL + url,
      method: "POST",
      headers: Object.assign({}, headers),
      data
    });
    return res.data.result ? res.data.result : res.data;
  } catch (err) {
    handleError(err);
  }
};

export const putRequest = async (
  url,
  data = {},
  headers = _authorizationHeaders()
) => {
  try {
    const res = await axios({
      url: API_URL + url,
      method: "PUT",
      headers: Object.assign({}, headers),
      data
    });
    return res.data.result ? res.data.result : res.data;
  } catch (err) {
    handleError(err);
  }
};

export const patchRequest = async (
  url,
  data = {},
  headers = _authorizationHeaders()
) => {
  try {
    const res = await axios({
      url: API_URL + url,
      method: "PATCH",
      headers: Object.assign({}, headers),
      body: JSON.stringify(data)
    });
    return res.data.result ? res.data.result : res.data;
  } catch (err) {
    handleError(err);
  }
};

export const deleteRequest = async (url, headers = _authorizationHeaders()) => {
  try {
    const res = await axios({
      url: API_URL + url,
      method: "DELETE",
      headers: Object.assign({}, headers)
    });
    return res.data.result ? res.data.result : res.data;
  } catch (err) {
    handleError(err);
  }
};

export const Api = {
  deleteRequest,
  getListRequest,
  getRequest,
  postRequest,
  putRequest,
  patchRequest
};
