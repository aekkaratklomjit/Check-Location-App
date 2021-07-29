import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomeScreens from './screens/HomeScreens';

import {createStore , applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import {Provider} from 'react-redux'
import rootReducer from './reducers';
const store = createStore(rootReducer,applyMiddleware(thunk)+window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Routing = () =>{
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreens} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routing />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
