import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory } from "history";
import configureStore from "./store/configureStore";
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
const history = createBrowserHistory();
const store = configureStore({}, history);
ReactDOM.render(
  <Provider store={store}>
     <Router history={history}>
    <App />
    </Router>
    </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
