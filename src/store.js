import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers';

const ext =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = [ReduxPromise];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    ext
  )
);

export default store;
