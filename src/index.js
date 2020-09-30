import React from 'react';
import ReactDOM from 'react-dom';
import { provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))
 
ReactDOM.render(
	           <provider>  
	           <App store={store}/>
	           </provider>, document.getElementById('root'));
serviceWorker.register();