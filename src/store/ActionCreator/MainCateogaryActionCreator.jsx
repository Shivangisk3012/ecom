import { ADD_MAINCATEOGARY, GET_MAINCATEOGARY, UPDATE_MAINCATEOGARY, DELETE_MAINCATEOGARY } from "../COnstant";

export function addMainCateogary(data) {
  return {
    type: ADD_MAINCATEOGARY,
    payload: data.name,
  };
}


export function getMainCateogary() {
  return {
    type: GET_MAINCATEOGARY,
  };
}

export function updateMainCateogary(data) {
  return {
    type: UPDATE_MAINCATEOGARY,
    payload: data,
  };
}

export function deleteMainCateogary(data) {
  return {
    type: DELETE_MAINCATEOGARY,
    payload: data,
  };
}
