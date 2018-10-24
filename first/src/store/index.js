import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import homedata from '@/components/Home/store';
const reducer = combineReducers({
  homedata
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
