import React, { ReactElement } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';

import * as css from '@assets/styles/home.module.scss';

import { getNews } from '@store/actions/index';
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
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h2>{t('welcome')}</h2>
      <button type="button" onClick={() => changeLanguage('vi')}>vi</button>
      <button type="button" onClick={() => changeLanguage('en')}>en</button>
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
