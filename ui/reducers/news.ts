import { GET_NEWS, NEWS_RECEIVED } from '@actionTypes/index';

const reducer = (state = {data: [], loading: false}, action) => {
  switch (action.type) {
    case GET_NEWS:
      return { ...state, loading: true };
    case NEWS_RECEIVED:
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
};

export default reducer;
