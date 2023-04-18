import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import { socketMiddleware } from './middleware/socketMiddleware';
<<<<<<< HEAD

const wsFeedUrl = 'wss://norma.nomoreparties.space/orders/all';
=======
import { WSAction } from './constants/ws';
>>>>>>> sprint-17
 
const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

<<<<<<< HEAD
const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware()));
=======
const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(WSAction)));
>>>>>>> sprint-17

export const store = createStore(rootReducer, enhancer);