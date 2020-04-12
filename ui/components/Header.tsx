import React, { ReactElement } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { getNews } from '@actions/index';

import * as css from '@assets/styles/home.module.scss';

interface RootState {
  newsState: {
    loading: boolean,
    data: Array<any>
  }
}

const mapState = (state: RootState) => ({
  news: state.newsState.data,
  loading: state.newsState.loading
});

const mapDispatch = {
  getNews,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
}

const Header: React.FC<Props> = (props: Props): ReactElement => (
  <div>
    {props.loading && <p>Loading</p>}
    {!props.loading && <p>Load done</p>}
    <button onClick={props.getNews}>Load data</button>
    <ul>
      {props.news.map(item => <li>{item.title}</li>)}
    </ul>
    <h1 className={css.home}>Header</h1>
  </div>
);

export default connector(Header);
