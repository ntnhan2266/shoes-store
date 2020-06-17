import React from 'react';
import Link from 'next/link';
import Icon from '@material-ui/core/Icon';
import { useTranslation } from 'react-i18next';

import * as classes from '@assets/styles/components/registermail.module.scss';

const RegisterMail = props => {
  const { t, i18n } = useTranslation();

  return (
    <div className={classes.registermail}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 offset-md-1">
            <div className={classes.title}>
              <h2>{t('register_receive_mail')}</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className={classes.registerForm}>
              <div className={classes.inputGroup}>
                <input type="text" id="email" className={classes.emailInput} placeholder={t('your_email')} />
              </div>
              <div className={classes.inputGroupBtn}>
                <button type="button" className={classes.btnSubmit}>{t('register')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterMail;