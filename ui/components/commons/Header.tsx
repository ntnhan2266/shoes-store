import React, { ReactElement } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Link from 'next/link'
import Icon from '@material-ui/core/Icon';

import * as classes from '@assets/styles/components/header.module.scss';

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
    <header>
      <div className={classes.headerWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-end-lg">
                <Link href="/">
                  <a className={`navbar-brand ${classes.siteName}`} href="" title={t('homepage')}>Dev4Fun</a>
                </Link>
                <div className="d-flex flex-grow-1 justify-content-end">
                  <ul className="nav">
                    <li className="nav-item align-item-center ml-16">
                      <Icon className="gray-text fs-20 pointer" title={t('search')}>search</Icon>
                    </li>
                    <li className="nav-item align-item-center ml-16">
                      <Icon className="gray-text fs-20 pointer" title={t('bookmarks')}>bookmarks</Icon>
                    </li>
                    <li className="nav-item align-item-center ml-16">
                      <Icon className="gray-text fs-20 pointer" title={t('notifications')}>notifications</Icon>
                    </li>
                    <li className="nav-item align-item-center ml-16">
                      <span title={t('profile')}>
                        <img src="/images/account.jpg" alt="avatar" className="default-avatar"/>
                      </span>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default connector(Header);
