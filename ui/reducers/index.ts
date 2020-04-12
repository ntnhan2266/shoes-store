import { combineReducers } from 'redux';
import newsReducers from '@reducers/news';

export default combineReducers({
  newsState: newsReducers
});
