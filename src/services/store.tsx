import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import { socketMiddleware } from './middleware/socketMiddleware';
import { WSAction } from './constants/ws';
 
const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(WSAction)));

export const store = createStore(rootReducer, enhancer);