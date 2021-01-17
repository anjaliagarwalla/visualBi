import { put, call, takeLatest } from "redux-saga/effects";
import * as types from "../constants";

export function* getSongs(action) {
    try {
      action.api = "https://jsonplaceholder.typicode.com/albums";
      let temp;
      const response= yield call(   
    fetch(action.api,{method: "GET"})
        .then(response => {
           return response.json();
        }).then((responseJson) => {
          temp=responseJson
          return temp
          })
          )
          console.log("temp",temp)
          
      if (response)  {
        yield put({ type: types.GET_ALL_SONGS_SUCCESS, data: response });
      } else {
        yield put({
          type: types.GET_ALL_SONGS_FAILURE,
          data: response
        });
      }
     } 
     catch (e) {
      yield put({
        type: types.GET_ALL_SONGS_FAILURE,
        data: e.json
     });
     }
  }
  export default function* CommonSagas() {
    yield [
      yield takeLatest(types.GET_ALL_SONGS_REQUEST, getSongs)
    
    ];
  }
  