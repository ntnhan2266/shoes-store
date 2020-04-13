import React, { ReactElement } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { getNews } from '@store/actions/index';
import * as css from '@assets/styles/home.module.scss';
import { NewsActionTypes } from '@store/actionTypes/index';
import { RootState } from '@store/reducers/index';

interface DispatchProps {
  fetchNews: () => NewsActionTypes;
}

const mapState = (state: RootState) => ({
  news: state.newsState.data,
  loading: state.newsState.loading,
});

const mapDispatch = {
  fetchNews: getNews,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & DispatchProps;

const Header: React.FC<Props> = (props: Props): ReactElement => {
  const { loading, news, fetchNews } = props;
  return (
    <div>
      {loading && <p>Loading</p>}
      {!loading && <p>Load done</p>}
      <button type="button" onClick={fetchNews}>Load data</button>
      <ul>
        {news.map((item) => <li>{item.title}</li>)}
      </ul>
      <h1 className={css.home}>Header</h1>
    </div>
  );
};

export default connector(Header);
