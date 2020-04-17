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
              <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-end">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <Link href="/">
                  <a className={`navbar-brand ${classes.siteName}`} href="">Dev4Fun</a>
                </Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav justify-content-end flex-grow-1">
                    <li className="nav-item align-item-center">
                      <Icon className="gray-text fs-20 mx-8">search</Icon>
                    </li>
                    <li className="nav-item align-item-center">
                      <Icon className="gray-text fs-20 mx-8">bookmarks</Icon>
                    </li>
                    <li className="nav-item align-item-center">
                      <Icon className="gray-text fs-20 mx-8">notifications</Icon>
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
