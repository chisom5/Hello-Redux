import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = { tech: "Redux" };

// let composeEnhancer = compose;
// if (process.env.NODE_ENV === 'development') {
//     composeEnhancer = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;
// }
// composeEnhancer(),
const store = createStore(rootReducer, initialState);

export default store;