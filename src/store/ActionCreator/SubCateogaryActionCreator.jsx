import { ADD_SUBCATEOGARY, GET_SUBCATEOGARY, UPDATE_SUBCATEOGARY, DELETE_SUBCATEOGARY } from "../COnstant";

export function addSubCateogary(data) {
  return {
    type: ADD_SUBCATEOGARY,
    payload: data.name,
  };
}


export function getSubCateogary() {
  return {
    type: GET_SUBCATEOGARY,
  };
}

export function updateSubCateogary(data) {
  return {
    type: UPDATE_SUBCATEOGARY,
    payload: data,
  };
}

export function deleteSubCateogary(data) {
  return {
    type: DELETE_SUBCATEOGARY,
    payload: data,
  };
}
