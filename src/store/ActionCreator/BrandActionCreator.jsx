import { ADD_BRAND, GET_BRAND, UPDATE_BRAND, DELETE_BRAND } from "../COnstant";

export function addBrand(data) {
  return {
    type: ADD_BRAND,
    payload: data.name,
  };
}


export function getBrand() {
  return {
    type: GET_BRAND,
  };
}

export function updateBrand(data) {
  return {
    type: UPDATE_BRAND,
    payload: data,
  };
}

export function deleteBrand(data) {
  return {
    type: DELETE_BRAND,
    payload: data,
  };
}
