export const GET_NEWS = 'GET_NEWS';
export const NEWS_RECEIVED = 'NEWS_RECEIVED';

interface GetNewsAction {
  type: typeof GET_NEWS;
}

interface ReceiveNews {
  type: typeof NEWS_RECEIVED;
  payload: Array<string>;
}

export type NewsActionTypes = GetNewsAction | ReceiveNews;
