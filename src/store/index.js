import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/auth.reducer';

// use combine reducers
const reducers = combineReducers({ authReducer });

// export the store after creating it
export default createStore(reducers);
