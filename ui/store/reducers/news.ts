import { Reducer } from 'redux';

import { GET_NEWS, NEWS_RECEIVED, NewsActionTypes } from '@store/actionTypes/index';
import { NewsState } from '@store/types/news';

const initialState: NewsState = {
  data: [],
  loading: false,
};

const reducer: Reducer<NewsState> = (state = initialState, action: NewsActionTypes) => {
  switch (action.type) {
    case GET_NEWS:
      return { ...state, loading: true };
    case NEWS_RECEIVED:
      return { ...state, ...action.payload, loading: false };
    default:
      return state;
  }
};

export default reducer;
