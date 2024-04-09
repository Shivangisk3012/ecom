import {takeEvery,put} from "redux-saga/effects"
import { ADD_MAINCATEOGARY_RED, ADD_MAINCATEOGARY, DELETE_MAINCATEOGARY_RED, DELETE_MAINCATEOGARY,UPDATE_MAINCATEOGARY_RED ,UPDATE_MAINCATEOGARY,GET_MAINCATEOGARY,GET_MAINCATEOGARY_RED,} from "../COnstant";
import {addRecord, getRecord, updateRecord, deleteRecord} from "./Services/MainCateogaryServices"


 function* addSaga(action){
  let response =  yield addRecord(action.payload);
  console.log(response)
    yield put({type:ADD_MAINCATEOGARY_RED, payload:response})
   // response = {name: shivangi}
   // payload : {name: shivangi}
 }

 function* getSaga(){
    let response=  yield getRecord();
      yield put({type:GET_MAINCATEOGARY_RED, payload:response})
  
   }
   function* updateSaga(action){
     yield updateRecord(action.payload);
      yield put({type:UPDATE_MAINCATEOGARY_RED, payload:action.payload})
  
   }
   function* deleteSaga(action){
    yield deleteRecord(action.payload);
      yield put({type:DELETE_MAINCATEOGARY_RED, payload:action.payload})
  
   }

  

 export default function* maincateogarySagas(){
    yield takeEvery(ADD_MAINCATEOGARY,addSaga)
    yield takeEvery(GET_MAINCATEOGARY,getSaga)
    yield takeEvery(UPDATE_MAINCATEOGARY,updateSaga)
    yield takeEvery(DELETE_MAINCATEOGARY,deleteSaga)


 }

