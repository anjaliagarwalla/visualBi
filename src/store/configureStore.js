import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../redux/reducers/index";
import sagas from "../redux/sagas";
import { createBrowserHistory } from "history";
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState, history) {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];


  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  
  );

  sagaMiddleware.run(sagas);
  store["runSaga"] = sagaMiddleware.run;

  return store;
}

