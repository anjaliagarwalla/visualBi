import { fork } from "redux-saga/effects";
import CommonSagas from "./common";

export default function* main() {
  yield fork(CommonSagas);
 

}
