import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { tectest } from './tecTest/reducers';
import { users } from './users/reducers';
import { auth } from './auth/reducers';

const composeEnhancers = composeWithDevTools({});
const devTools =
  process.env.NODE_ENV === 'development'
    ? composeEnhancers(applyMiddleware(thunk))
    : applyMiddleware(thunk);

const reducers = combineReducers({
  auth,
  tectest,
  users,
});

export const store = createStore(reducers, devTools);
