import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './authReducer';
import user from './userReducer';
import companies from './companyReducer';
import stocks from './stocksReducer';

const rootReducer = combineReducers({
    form,
    auth,
    user,
    companies,
    stocks
});

export default rootReducer;
