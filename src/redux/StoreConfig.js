import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CryptoReducer from './api/CryptoData';

const reducer = combineReducers({
  CryptoReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
