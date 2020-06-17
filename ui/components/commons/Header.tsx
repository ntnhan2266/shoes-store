import React, { ReactElement } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Link from 'next/link'
import Icon from '@material-ui/core/Icon';

import * as classes from '@assets/styles/components/header.module.scss';

import { getNews } from '@store/actions/index';
import { NewsActionTypes } from '@store/actionTypes/index';
import { RootState } from '@store/reducers/index';
import RegisterBar from '@components/commons/RegisterBar';

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
    <header>
      <div className={classes.headerWrapper}>
        <RegisterBar />
        <div className="container">
          <div className="row">
            <div className="col-12">
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default connector(Header);
