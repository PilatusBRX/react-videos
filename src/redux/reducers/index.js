import { combineReducers } from 'redux';
import videoReducer from '../reducers/videoReducer';
import categoryReducer from '../reducers/categoryReducer';

export default combineReducers({
    videoList: videoReducer,
    categoryList: categoryReducer 
})
