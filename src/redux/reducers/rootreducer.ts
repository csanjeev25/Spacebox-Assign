import { combineReducers } from 'redux';
import { uploadReducer } from 'src/redux/reducers/imageReducer';

const rootReducer = combineReducers({
    uploadReducer
});

export { rootReducer }
