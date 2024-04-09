import {takeEvery,put} from "redux-saga/effects"
import { ADD_BRAND_RED, ADD_BRAND, DELETE_BRAND_RED, DELETE_BRAND,UPDATE_BRAND_RED ,UPDATE_BRAND,GET_BRAND,GET_BRAND_RED,} from "../COnstant";
import {addRecord, getRecord, updateRecord, deleteRecord} from "./Services/BrandServices"


 function* addSaga(action){
  let response =  yield addRecord(action.payload);
  console.log(response)
    yield put({type:ADD_BRAND_RED, payload:response})
   // response = {name: shivangi}
   // payload : {name: shivangi}
 }

 function* getSaga(){
    let response=  yield getRecord();
      yield put({type:GET_BRAND_RED, payload:response})
  
   }
   function* updateSaga(action){
     yield updateRecord(action.payload);
      yield put({type:UPDATE_BRAND_RED, payload:action.payload})
  
   }
   function* deleteSaga(action){
    yield deleteRecord(action.payload);
      yield put({type:DELETE_BRAND_RED, payload:action.payload})
  
   }

  

 export default function* brandSagas(){
    yield takeEvery(ADD_BRAND,addSaga)
    yield takeEvery(GET_BRAND,getSaga)
    yield takeEvery(UPDATE_BRAND,updateSaga)
    yield takeEvery(DELETE_BRAND,deleteSaga)


 }

