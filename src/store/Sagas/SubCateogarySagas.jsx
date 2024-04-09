import {takeEvery,put} from "redux-saga/effects"
import { ADD_SUBCATEOGARY_RED, ADD_SUBCATEOGARY, DELETE_SUBCATEOGARY_RED, DELETE_SUBCATEOGARY,UPDATE_SUBCATEOGARY_RED ,UPDATE_SUBCATEOGARY,GET_SUBCATEOGARY,GET_SUBCATEOGARY_RED,} from "../COnstant";
import {addRecord, getRecord, updateRecord, deleteRecord} from "./Services/SubCateogaryServices"


 function* addSaga(action){
  let response =  yield addRecord(action.payload);
  console.log(response)
    yield put({type:ADD_SUBCATEOGARY_RED, payload:response})
   // response = {name: shivangi}
   // payload : {name: shivangi}
 }

 function* getSaga(){
    let response=  yield getRecord();
      yield put({type:GET_SUBCATEOGARY_RED, payload:response})
  
   }
   function* updateSaga(action){
     yield updateRecord(action.payload);
      yield put({type:UPDATE_SUBCATEOGARY_RED, payload:action.payload})
  
   }
   function* deleteSaga(action){
    yield deleteRecord(action.payload);
      yield put({type:DELETE_SUBCATEOGARY_RED, payload:action.payload})
  
   }

  

 export default function* subcateogarySagas(){
    yield takeEvery(ADD_SUBCATEOGARY,addSaga)
    yield takeEvery(GET_SUBCATEOGARY,getSaga)
    yield takeEvery(UPDATE_SUBCATEOGARY,updateSaga)
    yield takeEvery(DELETE_SUBCATEOGARY,deleteSaga)


 }

