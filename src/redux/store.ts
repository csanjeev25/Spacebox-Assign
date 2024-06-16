import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from 'src/redux/reducers';

const middleware = [thunk, logger];
const storeEnhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, storeEnhancer);
export type RootState = ReturnType<typeof store.getState>;

export { store };
