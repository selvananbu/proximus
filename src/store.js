import {createStore} from 'redux';
import allReducers from './reducers/rootreducers';

const store = createStore(allReducers);


export default store;
