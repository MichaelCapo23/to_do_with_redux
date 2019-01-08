import listReducer from './list_reducer'
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,//key has to be called form
    list: formReducer
});

export default rootReducer;