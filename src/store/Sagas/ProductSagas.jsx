import {takeEvery,put} from "redux-saga/effects"
import { ADD_PRODUCT_RED, ADD_PRODUCT, DELETE_PRODUCT_RED, DELETE_PRODUCT,UPDATE_PRODUCT_RED ,UPDATE_PRODUCT,GET_PRODUCT,GET_PRODUCT_RED,} from "../COnstant";
import {addRecord, getRecord, updateRecord, deleteRecord} from "./Services/ProductServices"


 function* addSaga(action){
  let response =  yield addRecord(action.payload);
  console.log(response)
    yield put({type:ADD_PRODUCT_RED, payload:response})
   // response = {name: shivangi}
   // payload : {name: shivangi}
 }

 function* getSaga(){
    let response=  yield getRecord();
      yield put({type:GET_PRODUCT_RED, payload:response})
  
   }
   function* updateSaga(action){
     yield updateRecord(action.payload);
      yield put({type:UPDATE_PRODUCT_RED, payload:action.payload})
  
   }
   function* deleteSaga(action){
    yield deleteRecord(action.payload);
      yield put({type:DELETE_PRODUCT_RED, payload:action.payload})
  
   }

  

 export default function* productSagas(){
    yield takeEvery(ADD_PRODUCT,addSaga)
    yield takeEvery(GET_PRODUCT,getSaga)
    yield takeEvery(UPDATE_PRODUCT,updateSaga)
    yield takeEvery(DELETE_PRODUCT,deleteSaga)


 }

