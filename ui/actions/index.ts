import { GET_NEWS, NEWS_RECEIVED } from '@actionTypes/index';

export const getNews = () => ({
  type: GET_NEWS,
  payload: {},
});

export const newsReceived = (news) => ({
  type: NEWS_RECEIVED,
  payload: news,
});
