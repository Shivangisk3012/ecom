import { ADD_PRODUCT, GET_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from "../COnstant";

export function addProduct(data) {
  return {
    type: ADD_PRODUCT,
    payload: data.name,
  };
}


export function getProduct() {
  return {
    type: GET_PRODUCT,
  };
}

export function updateProduct(data) {
  return {
    type: UPDATE_PRODUCT,
    payload: data,
  };
}

export function deleteProduct(data) {
  return {
    type: DELETE_PRODUCT,
    payload: data,
  };
}
