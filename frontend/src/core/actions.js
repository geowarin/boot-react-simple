// import { actions as routeActions } from 'shasta-router'
import { createActions, createReducerActions } from 'shasta';
import store from './store'
import localActions from '../actions/.lookup'
import localReducers from '../reducers/.lookup';

export default createActions({
  ...localActions,
  // ...routeActions,
  ...createReducerActions(localReducers)
}, store.dispatch)
