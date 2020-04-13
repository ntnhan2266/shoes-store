import { combineReducers } from 'redux';
import newsReducers from '@store/reducers/news';
import { NewsState } from '@store/types/news';

export interface AppState {
  newsState: NewsState;
}

export const rootReducer = combineReducers<AppState>({
  newsState: newsReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
