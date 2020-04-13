import { GET_NEWS, NEWS_RECEIVED, NewsActionTypes } from '@store/actionTypes/index';

export const getNews = (): NewsActionTypes => ({
  type: GET_NEWS,
});

export const newsReceived = (news: Array<string>): NewsActionTypes => ({
  type: NEWS_RECEIVED,
  payload: news,
});
