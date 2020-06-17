import React from 'react';
import Link from 'next/link';
import Icon from '@material-ui/core/Icon';
import { useTranslation } from 'react-i18next';

import * as classes from '@assets/styles/components/registerbar.module.scss';

const RegisterBar = props => {
  const { t, i18n } = useTranslation();

  return (
    <div className={classes.registerbar}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className={classes.navigatebar}>
              <a className={classes.link} href="cal:1900">Hotline: <span className="bold">1800 1090</span></a>
              <Link href="/register"><a className={classes.link} href="">{t('register')}</a></Link>
              <Link href="/login"><a className={classes.link} href="">{t('login')}</a></Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterBar;