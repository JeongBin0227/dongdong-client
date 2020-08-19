import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './modules'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(ReduxThunk, logger)))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
